import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Skeleton } from "@/components/ui/skeleton";
import { ActivityItem } from "@/components/activity-item";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const auditLogs = await db.auditLog.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mt-4 mb-5">
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <ol className="space-y-4">
          {auditLogs.length === 0 ? (
            <p className="text-xs text-center text-muted-foreground py-4">
              No activity found inside this organization
            </p>
          ) : (
            auditLogs.map((log) => <ActivityItem key={log.id} data={log} />)
          )}
        </ol>
      </ScrollArea>
    </div>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <div className="space-y-4 mt-4">
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[50%] h-14" />
      <Skeleton className="w-[70%] h-14" />
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[75%] h-14" />
    </div>
  );
};

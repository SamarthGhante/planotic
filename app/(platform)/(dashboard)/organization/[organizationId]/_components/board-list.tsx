import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HelpCircle, Plus, SquarePlus, User2 } from "lucide-react";

import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { FormPopover } from "@/components/form/form-popover";

import { db } from "@/lib/db";
import { Board } from "@prisma/client";

export default async function BoardList() {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board: Board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover side="right" sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-full border border-neutral-400 bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <SquarePlus />
            <p className="text-sm">Create New Board</p>
            <Hint
              sideOffset={45}
              description={`
                Boards are workspaces where you organize and track information, tasks, or projects using lists and cards!
              `}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
}

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <Skeleton className="h-6 w-6 mr-2" />
        <Skeleton className="h-6 w-20" />
      </div>

      <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
        <Skeleton className="aspect-video h-full w-full" />
      </div>
    </div>
  );
};

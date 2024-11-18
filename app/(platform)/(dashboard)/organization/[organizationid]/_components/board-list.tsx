import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { HelpCircle, User2 } from "lucide-react";

import checkSubscription from "@/lib/subscription";
import { Hint } from "@/components/hint";
import FormPopover from "@/components/form/form-popover";

export default async function BoardList() {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const isPro = checkSubscription();

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <FormPopover side="right" sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">
              {isPro ? "Unlimited" : `5 remaining`}
            </span>
            <Hint
              sideOffset={45}
              description={`
                Free accounts are limited to 5 open boards. To create unlimited boards, please upgrade your workspace.
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

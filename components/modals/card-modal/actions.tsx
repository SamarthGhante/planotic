"use client";

import { toast } from "sonner";
import { Copy, Loader, Trash } from "lucide-react";
import { useParams } from "next/navigation";

import { CardWithList } from "@/types";
import { useCardModal } from "@/hooks/use-card-modal";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface ActionsProps {
  data: CardWithList;
}

export const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const [isLoadingCopy, setIsLoadingCopy] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingCopy(false);
      setIsLoadingDelete(false);
    }, 2000);
  });

  const onCopy = () => {
    const boardId = params.boardId as string;

    console.log({
      type: "copy",
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    console.log({
      type: "delete",
      id: data.id,
      boardId,
    });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Copy className="h-4 w-4 mr-2" />
        {isLoadingCopy ? (
          <Loader className="w-4 h-4 animate-spin ml-2" />
        ) : (
          "Copy"
        )}
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Trash className="h-4 w-4 mr-2" />
        {isLoadingDelete ? (
          <Loader className="w-4 h-4 animate-spin ml-2" />
        ) : (
          "Delete"
        )}
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};

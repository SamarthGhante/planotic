"use client";

import Image from "next/image";
import { CreditCard } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

interface infoProp {
  isPro: boolean;
}

export default function Info({ isPro }: infoProp) {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.Skeleton />;
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-4 w-4 mr-1" />
          <span>{isPro ? "Pro" : "Free"}</span>
        </div>
      </div>
    </div>
  );
}

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute bg-gray-200" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px] bg-gray-300" />
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2 bg-gray-200" />
          <Skeleton className="h-4 w-[100px] bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

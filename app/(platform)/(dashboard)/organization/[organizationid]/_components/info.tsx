"use client";

import Image from "next/image";
import { CreditCard } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";

interface infoProp {
  isPro: boolean;
}

export default function Info({ isPro }: infoProp) {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <div>Loading...</div>;
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

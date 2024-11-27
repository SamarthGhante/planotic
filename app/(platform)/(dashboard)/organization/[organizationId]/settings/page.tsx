import { ClerkLoading, OrganizationProfile } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="w-full">
      <ClerkLoading>
        <div className="h-full flex items-center justify-center text-black">
          <Loader2 className="h-8 w-8 text-purple-500 animate-spin" />
        </div>
      </ClerkLoading>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
}

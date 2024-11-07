import { ClerkLoading, OrganizationList } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SelectOrganizationPage() {
  return (
    <div>
      <ClerkLoading>
        <div className="flex items-center gap-2 text-white">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading...</span>
        </div>
      </ClerkLoading>

      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}

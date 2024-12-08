import { auth } from "@clerk/nextjs";
import { Info } from "../_components/info";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const BillingPage = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <div className="flex items-center justify-center">Billing Console</div>
    </div>
  );
};

export default BillingPage;

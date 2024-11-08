import { auth } from "@clerk/nextjs";

export default function OrganizationIdPage(){
  const {orgId} = auth();
  return (
    <div>
      OrganizationID:  {orgId}
    </div>
  );
}
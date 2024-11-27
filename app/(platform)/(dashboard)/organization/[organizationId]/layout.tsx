import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import OrgControl from "./_components/org-control";

export async function generateMetadata() {
  const { orgSlug } = auth();
  return {
    title: startCase(orgSlug || "organization"),
  };
}

interface childrenProp {
  children: React.ReactNode;
}

export default function OrganizationIdLayout({ children }: childrenProp) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

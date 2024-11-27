import OrgControl from "./_components/org-control";

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

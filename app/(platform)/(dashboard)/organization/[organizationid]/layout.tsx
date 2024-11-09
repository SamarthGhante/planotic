interface childrenProp {
  children: React.ReactNode;
}

export default function OrganizationIdLayout({ children }: childrenProp) {
  return (
    <>
      {/* TODO: orgination auto change [org-control component] */}
      {children}
    </>
  );
}

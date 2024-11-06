interface childrenProp {
  children: React.ReactNode;
}

export default function ClerkLayout({ children }: childrenProp) {
  return <div>{children};</div>;
}

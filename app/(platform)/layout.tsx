import { ClerkProvider } from "@clerk/nextjs";

interface childrenProp {
  children: React.ReactNode;
}

export default function PlatformLayout({ children }: childrenProp) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

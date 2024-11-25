import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

interface childrenProp {
  children: React.ReactNode;
}

export default function PlatformLayout({ children }: childrenProp) {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
}

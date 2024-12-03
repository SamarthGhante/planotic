import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/modal-provider";

interface childrenProp {
  children: React.ReactNode;
}

export default function PlatformLayout({ children }: childrenProp) {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </ClerkProvider>
  );
}

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

interface childrenProp {
  children: React.ReactNode;
}

export default function ClerkLayout({ children }: childrenProp) {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-1 md:col-span-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 flex items-center justify-center">
        {children}
      </div>
      <div className="hidden md:flex md:col-span-2 bg-slate-200 p-6 flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="Planotic Logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <h1
          className={cn(
            "text-black text-3xl font-semibold",
            headingFont.className
          )}
        >
          Planotic
        </h1>
        <p className="font-medium">Turns Chaos Into Clarity!</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const toastFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div
          className={cn(
            "mb-4 flex items-center border shadow-sm p-2 border-black border-dashed text-orange-500 font-bold rounded-full uppercase",
            toastFont.className
          )}
        >
          <Medal className="h-6 w-6 mr-2" />
          No.1 Task Management App
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Turn Chaos Into Clarity!
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 p-2 rounded-md pb-4 w-fit ">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Planotic.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Planotic for free</Link>
      </Button>
    </div>
  );
}

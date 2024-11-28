import { Board } from "@prisma/client";

interface boardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({ data }: boardNavbarProps) {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      {data.title}
    </div>
  );
}

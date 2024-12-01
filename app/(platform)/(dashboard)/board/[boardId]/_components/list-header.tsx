import { List } from "@prisma/client";
import { useState } from "react";

interface listHeaderProps {
  data: List;
}

export const ListHeader = ({ data }: listHeaderProps) => {
  const [title, setTitle] = useState(data.title);
  return (
    <div className="pt-2 px-2 text-sm font-semibold">
      <div className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent">
        {title}
      </div>
    </div>
  );
};

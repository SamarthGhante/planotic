import { List } from "@prisma/client";
import { ListHeader } from "./list-header";

interface listItemProps {
  data: List;
}

export const ListItem = ({ data }: listItemProps) => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-1">
        <ListHeader data={data} />
      </div>
    </li>
  );
};

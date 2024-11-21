"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { FormPicker } from "./form-picker";

interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  const onSubmit = async (formData: FormData) => {

    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({
      boardTitle: title,
      BoardImage: image,
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormPicker id="image" />
            <FormInput
              id="title"
              label="Board Name"
              placeholder="Enter Board Name"
              type="text"
            />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};

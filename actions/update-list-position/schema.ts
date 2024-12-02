import { z } from "zod";

export const UpdateListPosition = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      position: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
  ),
  boardId: z.string(),
});

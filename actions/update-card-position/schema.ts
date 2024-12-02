import { z } from "zod";

export const UpdateCardPosition = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      position: z.number(),
      listId: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
  ),
  boardId: z.string(),
});

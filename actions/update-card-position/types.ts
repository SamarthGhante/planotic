import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateCardPosition } from "./schema";

export type InputType = z.infer<typeof UpdateCardPosition>;
export type ReturnType = ActionState<InputType, Card[]>;

import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateListPosition } from "./schema";

export type InputType = z.infer<typeof UpdateListPosition>;
export type ReturnType = ActionState<InputType, List[]>;

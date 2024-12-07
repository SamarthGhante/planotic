import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();
    let userNameValue = user?.firstName + " " + user?.lastName;

    if (!user || !orgId) {
      throw new Error("User not found!");
    }

    if (user?.firstName == null || user?.lastName == null) {
      userNameValue = user?.emailAddresses[0].emailAddress as string;
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: userNameValue,
      },
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR]", error);
  }
};

import { UsersTable } from "~/modules/users";

import { useLoaderData } from "@remix-run/react";
import { db } from "~/prisma.server";

export async function loader() {
  const users = await db.user.findMany();
  return { users };
}

export default function () {
  const { users } = useLoaderData<typeof loader>();
  return <UsersTable users={users} />;
}

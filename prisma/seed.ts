import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        email: "limademys@gmail.com",
        name: "Demys Lima",
        type: "ADMIN",
        birthday: new Date("1985-02-13"),
        password: process.env.MAIN_PASSWORD ?? "",
      },
    ],
  });
}

seed().finally(() => prisma.$disconnect());

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        email: 'limademys@gmail.com',
        name: 'Demys Lima',
        type: 'ADMIN',
        birthday: new Date('1985-02-13'),
        password: await bcrypt.hash('123456', 10),
      },
    ],
  })
}

seed().finally(() => prisma.$disconnect())

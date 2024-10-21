import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const person = await prisma.person.create({
    data: {
      fname: "William",
      lname: "Turner",
      eye_color: "BL",
      birth_date: new Date("2023-10-21"),
    },
  });
  console.log(person);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

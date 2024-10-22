import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const person = await prisma.person.update({
    data: {
      street: "1225 Tremont St.",
      city: "Boston",
      state: "MA",
      country: "USA",
      postal_code: "02138",
    },
    where: {
      person_id: 1,
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

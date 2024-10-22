import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const deletePerson = await prisma.person.delete({
    where: {
      person_id: 1,
    },
  });
  console.log(deletePerson);
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

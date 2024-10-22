import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const person = await prisma.person.findUnique({
  //   where: {
  //     lname: "Turner", // ユニークフィールドとして定義されていないのでエラーになる
  //   },
  //   include: {
  //     favorite_food: true,
  //   },
  // });
  const persons = await prisma.person.findMany({
    where: {
      lname: "Turner",
    },
  });
  console.log(persons);
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

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const foods = await prisma.favorite_food.findMany({
    where: {
      person_id: 1,
    },
    include: {
      person: true,
    },
    orderBy: {
      food: "asc",
    },
  });

  console.log(foods);
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

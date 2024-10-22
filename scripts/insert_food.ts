import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const favoriteFood = await prisma.favorite_food.create({
    data: {
      person_id: 1,
      food: "nachos",
    },
  });
  console.log(favoriteFood);
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

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const results = await prisma.user.findMany({
    // skip: 2, 
    // take: 2
  });
  console.log(results);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const topics = await Promise.all(
    [...Array(5)].map((_) =>
      prisma.topic.create({
        data: {
          name: faker.hacker.noun(),
        },
      }),
    ),
  );

  await Promise.all(
    [...Array(30)].map((_) => {
      const topicIds = topics.filter((_) => Math.random() > 0.5).map(({ id }) => ({ id }));
      return prisma.post.create({
        data: {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          likes: 0,
          topics: {
            connect: topicIds,
          },
        },
      });
    }),
  );
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

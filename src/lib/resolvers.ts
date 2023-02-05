import { Resolvers } from "./generated/server/resolversTypes";
import prisma from "./prisma";

export const resolvers = {
  Query: {
    // TODO: fix type error.
    // This error is due to the return type of findMany() does not include topics,
    // but Prisma correctly returns topics when needed.
    // @ts-expect-error
    posts: async () => {
      return await prisma.post.findMany();
    },
  },
  Post: {
    topics: async (parent) => {
      return (
        (await prisma.post
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .topics()) ?? []
      );
    },
  },
} satisfies Resolvers;

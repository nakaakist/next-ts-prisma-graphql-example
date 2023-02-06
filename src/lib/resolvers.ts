import { Resolvers } from "./generated/server/resolversTypes";
import prisma from "./prisma";

export const resolvers = {
  Query: {
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

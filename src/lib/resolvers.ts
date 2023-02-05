import { Resolvers } from "./generated/server/resolversTypes";
import prisma from "./prisma";

export const resolvers = {
  Query: {
    posts: async () => {
      return await prisma.post.findMany({ include: { topics: true } });
    },
  },
} satisfies Resolvers;

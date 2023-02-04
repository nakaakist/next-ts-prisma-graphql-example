import { Resolvers } from "./generated/server/resolversTypes";

export const resolvers = {
  Query: {
    posts: async () => {
      return await prisma.post.findMany({ include: { topics: true } });
    },
  },
} satisfies Resolvers;

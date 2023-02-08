import { Resolvers } from "../generated/server/resolversTypes";
import prisma from "./prisma";

export const resolvers = {
  Query: {
    posts: async () => {
      return await prisma.post.findMany();
    },
    post: async (_, { id }) => {
      return await prisma.post.findUnique({ where: { id } });
    },
  },
  Mutation: {
    likePost: async (_, { id }) => {
      const post = await prisma.post.update({
        where: { id },
        data: {
          likes: {
            increment: 1,
          },
        },
      });

      return {
        post,
      };
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

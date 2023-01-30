import { Resolvers } from "./generated/server/resolversTypes";

export const resolvers = {
  Query: {
    posts: () => [
      {
        id: 1,
        title: "test post",
        content: "test content",
        likes: 0,
        topics: [{ id: 1, name: "test topic" }],
      },
    ],
  },
} satisfies Resolvers;

import { Resolvers } from "./generated/server/resolversTypes";

export const resolvers = {
  Query: {
    posts: () => [
      {
        id: 1,
        title: "test post",
        topics: [{ id: 1, name: "test topic" }],
      },
    ],
  },
} satisfies Resolvers;

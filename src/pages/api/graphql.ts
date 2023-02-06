import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import schema from "@/lib/schema";
import { resolvers } from "@/lib/resolvers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === "development") {
    // allow Apollo Studio to connect to the local server
    await NextCors(req, res, {
      methods: "*",
      origin: "*",
    });
  }

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  return await startServerAndCreateNextHandler(server)(req, res);
};

export default handler;

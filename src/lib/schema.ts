import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type Topic {
    id: Int!
    name: String!
  }

  type Post {
    id: Int!
    title: String!
    content: String!
    likes: Int!
    topics: [Topic!]!
  }

  type Query {
    posts: [Post]
  }
`);

export default schema;

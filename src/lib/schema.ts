import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  type Mutation {
    likePost(id: Int!): LikePostResponse!
  }

  type LikePostResponse {
    post: Post
  }

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
`);

export default schema;

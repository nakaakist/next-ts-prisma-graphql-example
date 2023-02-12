"use client";

import { useQuery } from "@apollo/client";
import { PostSummary } from "@/components/PostSummary";
import { graphql } from "@/generated/client";

const postsDocument = graphql(/* GraphQL */ `
  query posts {
    posts {
      id
      title
      likes
      topics {
        id
        name
      }
    }
  }
`);

const Home = () => {
  const { data, error } = useQuery(postsDocument);

  return (
    <div className="flex flex-col gap-5">
      {data?.posts?.map((post) => (
        <PostSummary key={post?.id} {...post} />
      ))}
    </div>
  );
};

export default Home;

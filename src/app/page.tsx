"use client";

import { useQuery } from "@apollo/client";
import { PostSummary } from "@/components/PostSummary";
import { graphql } from "@/generated/client";
import { Spinner } from "@/components/Spinner";

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
  const { data, loading } = useQuery(postsDocument);

  if (loading) {
    return (
      <div className="h-60 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {data?.posts?.map((post) => (
        <PostSummary key={post?.id} {...post} />
      ))}
    </div>
  );
};

export default Home;

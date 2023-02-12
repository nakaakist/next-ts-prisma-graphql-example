"use client";

import { useQuery } from "@apollo/client";
import { PostDetail } from "@/components/PostDetail";
import { graphql } from "@/generated/client";
import { Spinner } from "@/components/Spinner";

const postDocument = graphql(/* GraphQL */ `
  query post($id: Int!) {
    post(id: $id) {
      id
      title
      content
      likes
      topics {
        id
        name
      }
    }
  }
`);

const Post = (props: { params: { id: string } }) => {
  const { data, loading } = useQuery(postDocument, {
    variables: { id: parseInt(props.params.id as string) },
  });

  if (loading) {
    return (
      <div className="h-60 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <>{data && data.post && <PostDetail {...data.post} />}</>;
};

export default Post;

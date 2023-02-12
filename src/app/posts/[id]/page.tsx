"use client";

import { useQuery } from "@apollo/client";
import { PostDetail } from "@/components/PostDetail";
import { graphql } from "@/generated/client";

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
  const { data, error } = useQuery(postDocument, {
    variables: { id: parseInt(props.params.id as string) },
  });

  return <>{data && data.post && <PostDetail {...data.post} />}</>;
};

export default Post;

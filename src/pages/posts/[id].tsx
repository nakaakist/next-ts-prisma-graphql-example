import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { graphql } from "@/generated/client";
import { PostDetail } from "@/components/PostDetail";

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

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useQuery(postDocument, {
    variables: { id: parseInt(id as string) },
  });

  return (
    <>
      <Head>
        <title>Next TS Prisma GraphQL example</title>
      </Head>
      <main>{data && data.post && <PostDetail {...data.post} />}</main>
    </>
  );
}

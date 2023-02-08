import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { graphql } from "@/generated/client";
import { PostDetail } from "@/components/PostDetail";
import { Layout } from "@/components/Layout";

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
        <title>{data?.post?.title}</title>
      </Head>
      <Layout>
        <main>{data && data.post && <PostDetail {...data.post} />}</main>
      </Layout>
    </>
  );
}

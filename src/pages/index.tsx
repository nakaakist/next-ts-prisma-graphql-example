import { useQuery } from "@apollo/client";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { PostSummary } from "@/components/PostSummary";
import { APP_TITLE } from "@/constants";
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

export default function Home() {
  const { data, error } = useQuery(postsDocument);

  return (
    <>
      <Head>
        <title>Posts | {APP_TITLE}</title>
      </Head>
      <Layout>
        <div className="flex flex-col gap-5">
          {data?.posts?.map((post) => (
            <PostSummary key={post?.id} {...post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

import { useQuery } from "@apollo/client";
import Head from "next/head";
import { graphql } from "@/generated/client";
import { PostSummary } from "@/components/PostSummary";
import { Layout } from "@/components/Layout";

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
        <title>Next TS Prisma GraphQL example</title>
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

import { useQuery } from "@apollo/client";
import Head from "next/head";
import { graphql } from "@/generated/client";
import { PostSummary } from "@/components/PostSummary";

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
      <main>
        {data?.posts?.map((post) => (
          <PostSummary key={post?.id} {...post} />
        ))}
      </main>
    </>
  );
}

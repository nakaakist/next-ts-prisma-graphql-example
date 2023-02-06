import { useQuery } from "@apollo/client";
import Head from "next/head";
import { graphql } from "@/generated/client";

const postsDocument = graphql(/* GraphQL */ `
  query posts {
    posts {
      id
      title
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
        <pre>{JSON.stringify(data)}</pre>
      </main>
    </>
  );
}

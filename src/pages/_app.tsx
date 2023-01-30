import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} className={inter.className} />
    </ApolloProvider>
  );
}

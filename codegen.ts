import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/lib/schema.ts",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/lib/generated/server/resolversTypes.ts": {
      config: {
        useIndexSignature: true,
        maybeValue: "T | undefined | null",
        mappers: {
          Topic: "@prisma/client#Topic as TopicModel",
          Post: "@prisma/client#Post as PostModel",
        },
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./src/lib/generated/client/": {
      preset: "client",
      plugins: [],
    },
  },
};
export default config;

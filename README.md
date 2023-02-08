# Next.js + TypeScript + Prisma + GraphQL example

## About

This is an example implementation of a simple blog app using Next.js, TypeScript, Prisma, and GraphQL.

## Libraries used

### Base framework

- [Next.js](https://nextjs.org/)

### DB

- ORM: [Prisma](https://www.prisma.io/)

### GraphQL

- client: [Apollo Client](https://www.apollographql.com/docs/react/)
- server: [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- server (Next.js integration): [apollo-server-integration-next](https://github.com/apollo-server-integrations/apollo-server-integration-next)
- code generator: [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)

### UI

- CSS framework: [Tailwind CSS](https://tailwindcss.com/)

## Run locally

Prerequisites: Node.js (>= v16), pnpm, Docker

1. Install dependencies

```bash
pnpm install
```

2. create `.env.local` file with the following content

```bash
DATABASE_URL="postgresql://postgres:admin@localhost:5432/postgres?schema=public"
```

3.  Make sure that you have Docker running, and then run the following command

```bash
pnpm dev
```

4. Setup the database

```bash
pnpm setup:db
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deploy

You can choose any hosting provider that supports Next.js and PostgreSQL.

For example, [Vercel](https://vercel.com/) and [Supabase](https://supabase.com/) are good choices.

When setting up DB in Supabase, you can follow [this instruction](https://supabase.com/docs/guides/integrations/prisma).  
After setting up the `.env` file with `DATABASE_URL` and `SHADOW_DATABASE_URL`, run `pnpm prisma migrate dev` to create tables.  
Then, run `pnpm prisma db seed` to add seed data.

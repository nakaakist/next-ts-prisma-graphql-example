import Link from "next/link";
import { Post } from "@/generated/client/graphql";

export const PostSummary = (props: Pick<Post, "id" | "title" | "likes" | "topics">) => {
  const linkToDetail = `/posts/${props.id}`;
  return (
    <div>
      <Link href={linkToDetail}>
        <h2>{props.title}</h2>
      </Link>
      <ul>
        {props.topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
      <div>{props.likes}</div>
    </div>
  );
};

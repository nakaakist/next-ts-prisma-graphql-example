import { Post } from "@/generated/client/graphql";

export const PostDetail = (props: Post) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <ul>
        {props.topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
      <div>{props.likes}</div>
    </div>
  );
};

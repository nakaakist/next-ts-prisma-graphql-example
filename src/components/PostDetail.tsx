import { LikePostButton } from "./LikePostButton";
import { TopicTag } from "./TopicTag";
import { Post } from "@/generated/client/graphql";

export const PostDetail = (props: Post) => (
  <div className="flex flex-col gap-10">
    <div className="flex flex-col gap-5">
      <h1 className="text-heading text-4xl font-semibold">{props.title}</h1>

      <div className="flex gap-2">
        {props.topics.map((topic) => (
          <TopicTag key={topic.id} topic={topic} />
        ))}
      </div>
    </div>

    <p className="text-body text-lg">{props.content}</p>

    <div className="flex gap-2 items-center">
      <LikePostButton id={props.id} />
      <div className="text-caption">{props.likes}</div>
    </div>
  </div>
);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { TopicTag } from "./TopicTag";
import { Post } from "@/generated/client/graphql";

export const PostDetail = (props: Post) => {
  return (
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
        <button className="w-8 h-8 rounded-full border border-caption">
          <FontAwesomeIcon icon={faHeart} className="text-caption" />
        </button>
        <div className="text-caption">{props.likes}</div>
      </div>
    </div>
  );
};

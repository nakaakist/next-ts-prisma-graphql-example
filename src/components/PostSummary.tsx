import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { TopicTag } from "./TopicTag";
import { Post } from "@/generated/client/graphql";

export const PostSummary = (props: Omit<Post, "content">) => {
  const linkToDetail = `/posts/${props.id}`;
  return (
    <Link href={linkToDetail}>
      <div className="bg-white hover:bg-gray-100 px-2 py-5 flex flex-col gap-3 rounded">
        <h2 className="text-heading text-2xl font-medium">{props.title}</h2>

        <div className="flex gap-4">
          <div className="flex gap-2">
            {props.topics.map((topic) => (
              <TopicTag key={topic.id} topic={topic} />
            ))}
          </div>

          <div className="text-caption text-xs flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} />
            {props.likes}
          </div>
        </div>
      </div>
    </Link>
  );
};

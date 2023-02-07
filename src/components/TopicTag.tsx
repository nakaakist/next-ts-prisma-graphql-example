import { Topic } from "@/generated/client/graphql";

export const TopicTag = (props: { topic: Pick<Topic, "name"> }) => (
  <div className="bg-gray-200 text-body rounded p-1 text-xs">{props.topic.name}</div>
);

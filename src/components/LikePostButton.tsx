import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useMutation } from "@apollo/client";
import { graphql } from "@/generated/client";

const likePostDocument = graphql(/* GraphQL */ `
  mutation likePost($id: Int!) {
    likePost(id: $id) {
      post {
        id
        likes
      }
    }
  }
`);

export const LikePostButton = (props: { id: number }) => {
  const [likePost, { error, loading }] = useMutation(likePostDocument, {
    variables: { id: props.id },
  });

  return (
    <button
      className={
        "w-8 h-8 rounded-full border border-caption text-caption transition " +
        "hover:border-rose-500 hover:text-rose-500 active:bg-rose-500 active:text-white"
      }
      onClick={() => likePost()}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};

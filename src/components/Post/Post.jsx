import iconTime from "../../img/iconmonstr-time-2.svg";
import iconFavs3 from "../../img/iconmonstr-favorite-3.svg";
import iconFavs2 from "../../img/iconmonstr-favorite-2.svg";
import moment from "moment";
import {
  PostDate,
  PostLink,
  PostTitle,
  PostWrapper,
  LikeContent,
  FavoriteIcon,
  TimeIcon,
} from "./styles";

const Post = ({ post, onToggle }) => {
  const handleToggle = () => {
    onToggle(post.objectID);
  };

  return (
    <PostWrapper>
      <div>
        <LikeContent onClick={handleToggle}>
          <FavoriteIcon
            src={post.localFavs === "true" ? iconFavs3 : iconFavs2}
            alt="iconFavs"
          />
        </LikeContent>
        <TimeIcon>
          <img src={iconTime} alt="iconTime" />
        </TimeIcon>
        <PostDate>
          {moment(post.created_at).fromNow()} by {post.author}
        </PostDate>
        <PostLink
          href={post.story_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PostTitle>{post.story_title}</PostTitle>
        </PostLink>
      </div>
    </PostWrapper>
  );
};

export default Post;

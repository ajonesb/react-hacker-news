// import iconTime from "../../img/iconmonstr-time-2.svg";
// import iconFavs3 from "../../img/iconmonstr-favorite-3.svg";
// import iconFavs2 from "../../img/iconmonstr-favorite-2.svg";

import ClockIcon from "../Icons/TimeIcon";
import HeartIcon from "../Icons/HeartIcon";
import HeartOutlineIcon from "../Icons/HeartOutlineIcon";

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
import React from "react";

interface PostProps {
  post?: any;
  onToggle: (id: string) => void;
  objectID?: string;
  story_title: string;
  story_url: string;
  author?: string;
  localFavs?: string;
  created_at?: string;
}

const Post: React.FC<PostProps> = ({ post, onToggle }) => {
  // const Post = ({ post, onToggle }) => {
  const handleToggle = () => {
    onToggle(post.objectID);
  };

  return (
    <PostWrapper>
      <div>
        <LikeContent onClick={handleToggle}>
          <FavoriteIcon>
            {post.localFavs === "true" ? <HeartOutlineIcon /> : <HeartIcon />}
          </FavoriteIcon>
        </LikeContent>
        <TimeIcon>
          {/* <img src={iconTime} alt="iconTime" /> */}
          <ClockIcon />
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

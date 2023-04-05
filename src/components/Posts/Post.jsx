import React from "react";
import {
  PostContainer,
  PostTitle,
  PostAuthor,
  PostTime,
  LikeIcon,
} from "./styles";

const Post = ({ post, liked, handleLike }) => {
  return (
    <PostContainer>
      <PostTitle>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          {post.title}
        </a>
      </PostTitle>
      <PostAuthor>by {post.author}</PostAuthor>
      <PostTime>{post.created_at}</PostTime>
      <LikeIcon liked={liked} onClick={() => handleLike(post.objectID)}>
        &#x2665;
      </LikeIcon>
    </PostContainer>
  );
};

export default Post;

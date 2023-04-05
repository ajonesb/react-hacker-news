import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;

const PostAuthor = styled.span`
  margin: 10px 0;
  font-size: 14px;
  color: #777;
`;

const PostTime = styled.span`
  margin: 5px 0;
  font-size: 12px;
  color: #aaa;
`;

const LikeIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ liked }) => (liked ? "#f00" : "#ccc")};
  align-self: flex-end;
`;

const Posts = ({ filter }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0`
      )
      .then((response) => {
        const filteredPosts = response.data.hits.filter(
          (post) =>
            post.author &&
            post.story_title &&
            post.story_url &&
            post.created_at
        );
        setPosts(filteredPosts);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLike = (postId) => {
    const alreadyLiked = likedPosts.find((post) => post.objectID === postId);
    if (alreadyLiked) {
      setLikedPosts(likedPosts.filter((post) => post.objectID !== postId));
    } else {
      const post = posts.find((post) => post.objectID === postId);
      setLikedPosts([...likedPosts, post]);
    }
  };

  const filteredPosts = filter === "liked" ? likedPosts : posts;

  return (
    <Container>
      {loading && <p>Loading posts...</p>}
      {!loading &&
        filteredPosts.map((post) => (
          <PostContainer key={post.objectID}>
            <PostTitle>
              <a href={post.story_url} target="_blank" rel="noopener noreferrer">
                {post.story_title}
              </a>
            </PostTitle>
            <PostAuthor>by {post.author}</PostAuthor>
            <PostTime>{post.created_at}</PostTime>
            <LikeIcon
              liked={likedPosts.some((p) => p.objectID === post.objectID)}
              onClick={() => handleLike(post.objectID)}
            >
              &#x2665;
            </LikeIcon>
          </PostContainer>
        ))}
    </Container>
  );
};

export default Posts;

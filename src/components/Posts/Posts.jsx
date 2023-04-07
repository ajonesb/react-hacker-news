import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { Container } from "./styles";

const Posts = ({ filter }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState(
    JSON.parse(localStorage.getItem("likedPosts")) || []
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://hn.algolia.com/api/v1/search?tags=front_page`)
      .then((response) => {
        const filteredPosts = response.data.hits.filter(
          (post) => post.author && post.title && post.url && post.created_at
        );
        setPosts(filteredPosts);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLike = (postId) => {
    const postIndex = posts.findIndex((post) => post.objectID === postId);
    const alreadyLikedIndex = likedPosts.findIndex(
      (post) => post.objectID === postId
    );
    if (alreadyLikedIndex === -1) {
      const postToLike = posts[postIndex];
      setLikedPosts([...likedPosts, postToLike]);
    } else {
      const newLikedPosts = likedPosts.filter(
        (post) => post.objectID !== postId
      );
      setLikedPosts(newLikedPosts);
    }
  };

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const filteredPosts = filter === "liked" ? likedPosts : posts;

  return (
    <Container>
      {loading && <p>Loading posts...</p>}
      {!loading &&
        filteredPosts.map((post) => (
          <Post
            key={post.objectID}
            post={post}
            liked={likedPosts.some((p) => p.objectID === post.objectID)}
            handleLike={handleLike}
          />
        ))}
    </Container>
  );
};


export default Posts;

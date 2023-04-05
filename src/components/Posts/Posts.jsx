import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { Container } from "./styles";

const Posts = ({ filter }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState([]);

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

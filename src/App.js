import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import {
  getLocalStorageFavs,
  getLocalStorageSelectedNews,
  setLocalStorageSelectedNews,
} from "./components/LocalStorageUtils/LocalStorageUtils";

import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState([]);

  let getLocalFavs = posts.filter((e) => e.localFavs === "true");

  const getPosts = async (opt) => {
    const postsFromAPI = await fetchPosts(opt);
    setPosts(postsFromAPI);
    setFilteredPosts(postsFromAPI);
    setCurrentFilter("all");
  };

  useEffect(() => {
    const selectedNews = getLocalStorageSelectedNews();
    const getPosts = async (opt) => {
      const postsFromAPI = await fetchPosts(opt);
      setPosts(postsFromAPI);
      setFilteredPosts(postsFromAPI);
      setCurrentFilter("all");
    };
    getPosts(selectedNews);
  }, []);

  //Toggle Favs

  const toggleFavs = (id) => {
    const localFav = getLocalStorageFavs(id) === "true" ? "false" : "true";
    localStorage.setItem(`localStorageFavs_${id}`, localFav);

    const updatedPosts = posts.map((post) =>
      post.objectID === id ? { ...post, localFavs: localFav } : post
    );

    setPosts(updatedPosts);
    setFilteredPosts(currentFilter === "all" ? updatedPosts : getLocalFavs());
  };

  //filter local favs
  const showLocalFavs = () => {
    setFilteredPosts(getLocalFavs);
    setCurrentFilter("favs");
  };

  //filter all posts
  const showAllPosts = () => {
    setFilteredPosts(posts);
    setCurrentFilter("all");
  };

  const selectNews = (selected) => {
    setLocalStorageSelectedNews(selected);
    getPosts(selected);
  };

  return (
    <div className="container">
      <Header />

      {posts.length > 0 ? (
        <Posts
          posts={currentFilter === "all" ? posts : filteredPosts}
          showLocalFavs={showLocalFavs}
          showAllPosts={showAllPosts}
          currentFilter={currentFilter}
          onSelect={selectNews}
          selectedNews={getLocalStorageSelectedNews()}
          onToggle={toggleFavs}
        />
      ) : (
        "No Posts to show"
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

import getLocalStorageFavs from "./utils/LocalStorageUtils/getLocalStorageFavs";
import getLocalStorageSelectedNews from "./utils/LocalStorageUtils/getLocalStorageSelectedNews";
import setLocalStorageSelectedNews from "./utils/LocalStorageUtils/setLocalStorageSelectedNews";

import { fetchPosts } from "./api";

interface Post {
  localFavs: string;
  objectID: string;
  title: string;
  url: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  let getLocalFavs = posts.filter((e) => e.localFavs === "true");

  const getPosts = async (opt: string) => {
    const postsFromAPI = await fetchPosts(opt);
    setPosts(postsFromAPI);
    setFilteredPosts(postsFromAPI);
    setCurrentFilter("all");
  };

  useEffect(() => {
    const selectedNews = getLocalStorageSelectedNews();
    const getPosts = async (opt: string) => {
      const postsFromAPI = await fetchPosts(opt);
      setPosts(postsFromAPI);
      setFilteredPosts(postsFromAPI);
      setCurrentFilter("all");
    };
    getPosts(selectedNews);
  }, []);

  //Toggle Favs

  const toggleFavs = (id: string) => {
    const localFav = getLocalStorageFavs(id) === "true" ? "false" : "true";
    localStorage.setItem(`localStorageFavs_${id}`, localFav);

    const updatedPosts = posts.map((post) =>
      post.objectID === id ? { ...post, localFavs: localFav } : post
    );

    setPosts(updatedPosts);
    setFilteredPosts(currentFilter === "all" ? updatedPosts : getLocalFavs);
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

  const selectNews = (selected: string) => {
    setLocalStorageSelectedNews(selected);
    getPosts(selected);
  };

  return (
    <div className="container">
      <Header title="Hacker News" />

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

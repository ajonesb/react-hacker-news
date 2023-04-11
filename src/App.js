import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import {
  getLocalStorageFavs,
  getLocalStorageSelectedNews,
  setLocalStorageSelectedNews,
} from "./components/LocalStorageUtils/LocalStorageUtils";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState([]);

  let getLocalFavs = posts.filter((e) => e.localFavs === "true");

  useEffect(() => {
    const selectedNews = getLocalStorageSelectedNews();
    getPosts(selectedNews);
  }, []);

  const getPosts = async (opt) => {
    const postsFromAPI = await fetchPosts(opt);
    setPosts(postsFromAPI);
    setFilteredPosts(postsFromAPI);
    setCurrentFilter("all");
  };

  const fetchPosts = async (opt) => {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${opt.toLowerCase()}&page=0`
    );
    const data = await res.json();

    const hitList = data.hits
      .filter(
        (hit) =>
          hit.author && hit.story_title && hit.story_url && hit.created_at
      )
      .map((hit) => ({
        ...hit,
        localFavs: getLocalStorageFavs(hit.objectID),
        story_title:
          hit.story_title.length > 60
            ? hit.story_title.substring(0, 60) + " ..."
            : hit.story_title,
      }));

    return hitList;
  };

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

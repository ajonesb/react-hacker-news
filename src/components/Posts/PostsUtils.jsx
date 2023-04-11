// PostUtils.js

import { getLocalStorageFavs } from "../LocalStorageUtils/LocalStorageUtils";

export const getPosts = async (opt) => {
  const postsFromAPI = await fetchPosts(opt);
  return postsFromAPI
    .filter(
      (hit) =>
        hit.author !== undefined &&
        hit.author !== null &&
        hit.story_title !== undefined &&
        hit.story_title !== null &&
        hit.story_url !== undefined &&
        hit.story_url !== null &&
        hit.created_at !== undefined &&
        hit.created_at !== null
    )
    .map((hit) => ({
      ...hit,
      story_title:
        hit.story_title.length > 60
          ? hit.story_title.substring(0, 60) + " ..."
          : hit.story_title,
      localFavs: getLocalStorageFavs(hit.objectID),
    }));
};

export const fetchPosts = async (opt) => {
  const res = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?query=" +
      opt.toLowerCase() +
      "&page=0"
  );
  const data = await res.json();
  return data.hits;
};

export const showAllPosts = (posts, setFilteredPosts, setCurrentFilter) => {
  setFilteredPosts(posts);
  setCurrentFilter("all");
};

export const selectNews = (
  selected,
  setLocalStorageSelectedNews,
  setPosts,
  setFilteredPosts,
  setCurrentFilter
) => {
  setLocalStorageSelectedNews(selected);
  getPosts(selected).then((postsFromAPI) => {
    setPosts(postsFromAPI);
    setFilteredPosts(postsFromAPI);
    setCurrentFilter("all");
  });
};

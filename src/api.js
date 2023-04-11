import { getLocalStorageFavs } from "./components/LocalStorageUtils/LocalStorageUtils";

export const fetchPosts = async (opt) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=${opt.toLowerCase()}&page=0`
  );
  const data = await res.json();

  const hitList = data.hits
    .filter(
      (hit) => hit.author && hit.story_title && hit.story_url && hit.created_at
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

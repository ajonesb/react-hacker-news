import getLocalStorageFavs from "../utils/LocalStorageUtils/getLocalStorageFavs";
import { HitProps, FetchPostsProps } from "../Types/Api.interfaces";

const fetchPosts: FetchPostsProps = async (opt, page) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=${opt.toLowerCase()}&page=${page}`
  );
  const data = await res.json();

  const hitList = data.hits
    .filter(
      (hit: HitProps) =>
        hit.author && hit.story_title && hit.story_url && hit.created_at
    )
    .map((hit: HitProps) => ({
      ...hit,
      localFavs: getLocalStorageFavs(hit.objectID),
      story_title:
        hit.story_title.length > 60
          ? hit.story_title.substring(0, 60) + " ..."
          : hit.story_title,
    }));

  return hitList;
};

export default fetchPosts;

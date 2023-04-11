import Post from "../Post/Post";
import Tabs from "../Tabs/Tabs";
import { SelectPosts } from "./styles";

const Posts = ({
  posts,
  onToggle,
  showLocalFavs,
  showAllPosts,
  currentFilter,
  onSelect,
  selectedNews,
}) => {
  const handleSelectNews = (e) => {
    onSelect(e.target.value);
    e.preventDefault();
  };

  return (
    <>
      <Tabs
        showLocalFavs={showLocalFavs}
        showAllPosts={showAllPosts}
        currentFilter={currentFilter}
      ></Tabs>

      <div>
        <SelectPosts
          id="idsSelectedNews"
          onChange={handleSelectNews}
          value={selectedNews}
        >
          <option value="select">Select your news</option>
          <option value="angular">Angular</option>
          <option value="reactjs">ReactJs</option>
          <option value="vuejs">VueJs</option>
        </SelectPosts>
      </div>

      {posts.map((post) => (
        <Post
          key={post.objectID}
          post={post}
          onToggle={onToggle}
          story_title={post.story_title}
          story_url={post.story_url}
        />
      ))}
    </>
  );
};

export default Posts;

import React from "react";
import { TabsContainer, ButtonAllPosts, ButtonLocalFavs } from "./styles";

interface TabsProps {
  showLocalFavs: () => void;
  showAllPosts: () => void;
  currentFilter: string;
}

const Tabs: React.FC<TabsProps> = ({
  showLocalFavs,
  showAllPosts,
  currentFilter,
}) => {
  return (
    <>
      <TabsContainer>
        <ButtonAllPosts
          className={currentFilter === "all" ? "active" : ""}
          onClick={() => showAllPosts()}
        >
          All
        </ButtonAllPosts>

        <ButtonLocalFavs
          className={currentFilter === "favs" ? "active" : ""}
          onClick={() => showLocalFavs()}
        >
          My Favs
        </ButtonLocalFavs>
      </TabsContainer>
    </>
  );
};

export default Tabs;

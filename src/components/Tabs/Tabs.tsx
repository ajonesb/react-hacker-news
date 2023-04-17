import React from "react";
import { TabsContainer, ButtonAllPosts, ButtonLocalFavs } from "./styles";
import { TabsProps } from "../../Types/Tabs.interfaces";

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

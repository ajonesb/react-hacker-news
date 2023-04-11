import React from "react";
import { TabsContainer, ButtonAllPosts, ButtonLocalFavs } from "./styles";

const Tabs = ({ showLocalFavs, showAllPosts, currentFilter }) => {
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

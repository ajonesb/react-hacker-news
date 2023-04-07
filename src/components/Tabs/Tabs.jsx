import React, { useState } from "react";
import styled from "styled-components";
import Posts from "../Posts/Posts";

const TabsContainer = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #ccc;
  }
  li {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: #ccc;
    &.active {
      color: #000;
      border-bottom: 2px solid #000;
    }
  }
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      <ul>
        <li
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabClick("all")}
        >
          All
        </li>
        <li
          className={activeTab === "myFavs" ? "active" : ""}
          onClick={() => handleTabClick("myFavs")}
        >
          My Favs
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "all" && <Posts />}
        {activeTab === "myFavs" && <Posts filter="liked" />}
      </div>
    </TabsContainer>
  );
};

export default Tabs;

import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonAllPosts = styled.button`
  border-radius: 2px 0px 0px 2px;
  width: 98px;
  height: 31px;
  border: solid 1px #d6d6d6;
  padding: 3px 16px 0 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #6a6a6a;
  background-color: transparent;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &.active {
    border: solid 1px #1797ff;
    color: #1797ff;
  }
`;

export const ButtonLocalFavs = styled.button`
  border-radius: 0px 2px 2px 0px;
  width: 98px;
  height: 31px;
  border: solid 1px #d6d6d6;
  padding: 3px 16px 0 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #6a6a6a;
  background-color: transparent;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &.active {
    border: solid 1px #1797ff;
    color: #1797ff;
  }
`;

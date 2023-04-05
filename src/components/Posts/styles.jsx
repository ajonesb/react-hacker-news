import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;

export const PostAuthor = styled.span`
  margin: 10px 0;
  font-size: 14px;
  color: #777;
`;

export const PostTime = styled.span`
  margin: 10px 0;
  font-size: 14px;
  color: #777;
`;

export const LikeIcon = styled.span`
  font-size: 20px;
  color: ${(props) => (props.liked ? "#ff0000" : "#777")};
  cursor: pointer;
`;

import styled from "styled-components";

export const PostWrapper = styled.div`
  position: relative;
  width: 35%;
  height: 90px;
  margin: 38px 0% 0px 10%;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #ffffff;
  float: left;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  h3 {
    display: flex;
  }

  @media screen and (max-width: 992px) {
    width: 42.5%;
    margin: 38px 0 0px 5%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const PostDate = styled.p`
  width: 70%;
  height: 13px;
  margin: 16px 30px 7px 8px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
  float: left;
`;

export const PostTitle = styled.div`
  width: 75%;
  height: 20px;
  margin: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

export const PostLink = styled.a`
  text-decoration: none;
`;

export const LikeContent = styled.div`
  position: absolute;
  right: 0;
  width: 68px;
  height: 90px;
  margin: 0 0 0 16px;
  padding: 35px 22px 33px;
  border-radius: 6px;
  border: solid 1px rgba(96, 96, 96, 0.06);
  background-color: rgba(96, 96, 96, 0.06);
`;

export const FavoriteIcon = styled.div`
  width: 24px;
  height: 22px;
  object-fit: contain;

  hover & {
    opacity: 0.5;
  }
`;

export const TimeIcon = styled.div`
  width: 16px;
  height: 16px;
  margin: 13px 0px 0px 0;
  object-fit: contain;
  float: left;
`;

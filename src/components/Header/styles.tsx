import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 10%;
  height: 114px;
  margin: 0 0 70px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #ffffff 124%);

  @media screen and (max-width: 992px) {
    padding: 42px 5%;
  }
`;

export const Title = styled.h1`
  width: 208px;
  height: 28px;
  object-fit: contain;
  font-family: Baskerville;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b; ;
`;

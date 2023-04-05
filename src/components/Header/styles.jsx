import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 30px 100px;
  color: #fff;
  font-family: "Baskerville", serif;
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.75rem;
  font-weight: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: auto;
    padding: 0 10px;
  }
`;

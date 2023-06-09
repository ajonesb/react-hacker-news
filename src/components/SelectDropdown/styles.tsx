import styled from "styled-components";

export const StyledSelectDropdown = styled.select`
  width: 14%;
  height: 32px;
  margin: 63px 114px 1px 10%;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;

  @media screen and (max-width: 992px) {
    width: 42.5%;
    margin: 63px 114px 1px 5%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0px 1px 5%;
  }
`;

import React from "react";
import { HeaderStyles, Title } from "./styles";
import { HeaderProps } from "../../Types/Header.interfaces";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyles>
      <Title>{title}</Title>
    </HeaderStyles>
  );
};

Header.defaultProps = {
  title: "HACKER NEWS",
};

export default Header;

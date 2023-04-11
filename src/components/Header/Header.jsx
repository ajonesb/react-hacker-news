import { HeaderStyles, Title } from "./styles";

const Header = ({ title }) => {
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

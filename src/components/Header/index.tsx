import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Title>Happy New Year 🎉</Title>
    </header>
  );
};

export default Header;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  padding: 50px;
`;

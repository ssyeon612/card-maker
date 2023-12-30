import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Envlope from "./components/Envlope";

function Home() {
  return (
    <Container>
      <Envlope />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 500px;
  width: 700px;
  margin: 0 auto;
`;

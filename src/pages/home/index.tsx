import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Envlope from "./components/Envlope";

function Home() {
  return (
    <Container>
      <Envlope />
      <Decription>
        <h3>하트를 클릭해주세요</h3>
      </Decription>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Decription = styled.p`
  margin: 3rem;
  h3 {
    font-size: 25px;
    font-weight: 600;
  }
`;

import styled from "styled-components";
import SelectColor from "./SelectColor";
import SelectImage from "./SelectImage";

export default function SelectBox() {
  return (
    <Container>
      <SelectColor></SelectColor>
      <SelectImage></SelectImage>
    </Container>
  );
}

const Container = styled.div`
  /* height: 100%; */
  background-color: #ffffff;
  width: 500px;
  /* height: 600px; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

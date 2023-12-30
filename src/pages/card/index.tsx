import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import SelectColor from "./components/SelectColor";
import SelectImage from "./components/SelectImage";

function Home() {
  const [cardColor, setCardColor] = useState("#fff2f2");
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("./src/assets/images/sample.jpeg");
  const [content, setContent] = useState("");
 

  // const { OPENAI_API_KEY } = import.meta.env;
  // const createImage = async () => {
  //   await axios
  //     .post(
  //       "https://api.openai.com/v1/images/generations",
  //       {
  //         prompt: prompt,
  //         n: 1,
  //         size: "1024x1024",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${OPENAI_API_KEY}`,
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       if (response.data[0].url !== "") {
  //         setImage(response.data[0].url);
  //        }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const searchImage = (serachText: string) => {
    setPrompt(serachText);
    if (prompt === "") return;
    // createImage();
  };

  return (
    <Container>
      <Wrapper>
        <div className="selectBox">
          <SelectColor setColor={setCardColor}></SelectColor>
          <SelectImage setImage={searchImage}></SelectImage>
        </div>
        <Card backgroundColor={cardColor}>
          <img src={imageURL} alt="sample" />
          <TextArea rows={10} onChange={(e) => setContent(e.target.value)} />
          <SendButton>전송</SendButton>
        </Card>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  .selectBox {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
  }
`;

const Card = styled.div`
  height: 600px;
  width: 400px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  padding: 2rem;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  img {
    width: auto;
    height: 200px;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  border: none;
  height: 270px;
  font-size: 16px;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 28px;
  padding: 8px 10px;
  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: tomato;
  border-radius: 10px;
  cursor: pointer;
`;

export default Home;

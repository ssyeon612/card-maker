import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState(
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-YFFprkL6FjWARHcFquX5i2AI/user-PFC4WKeH6nsn2STYyylyCS41/img-25SA1yfhonxyVQpnEOJxvARX.png?st=2023-12-26T08%3A54%3A09Z&se=2023-12-26T10%3A54%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-25T23%3A11%3A13Z&ske=2023-12-26T23%3A11%3A13Z&sks=b&skv=2021-08-06&sig=TdBojdlUlkL8t1eUCD6jaW21E%2B06T2nrAf3kmALrj7k%3D",
  );

  const { OPENAI_API_KEY } = import.meta.env;
  const createImg = async () => {
    await axios
      .post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <Container>
      <Title>Happy New Year 🎉</Title>
      <ContentWrap>
        <SelectArea>
          <li>Color</li>
          <li>Color</li>
          <li>
            <input onChange={handleChange} />
          </li>
          <button>Submit</button>
        </SelectArea>
        <Card>
          <img src="./src/assets/images/sample.jpeg" alt="sample" />
          <TextArea rows={10} />
        </Card>
      </ContentWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #edeaea;
  display: flex;
  flex-direction: column;
`;

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

const ContentWrap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const SelectArea = styled.ul`
  margin: 30px;
  li {
    background-color: white;
    border-radius: 10px;
    height: 50px;
    width: 400px;
    margin: 20px;
  }
`;

const Card = styled.div`
  height: 600px;
  width: 400px;
  background-color: #fff2f2;
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
  /* background-attachment: local; */
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 28px;
  padding: 8px 10px;
  &:focus {
    outline: none;
  }
`;

export default Home;

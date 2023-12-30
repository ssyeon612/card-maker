import styled from "styled-components";

export default function Card() {
  return (
    <Card>
      <img src="./src/assets/images/sample.jpeg" alt="sample" />
      <TextArea rows={10} />
    </Card>
  );
}

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

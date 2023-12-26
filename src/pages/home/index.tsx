import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div>
        <h3>어떤 사진으로 만들어 드릴까요?</h3>
        <input placeholder="생성하고 싶은 사진을 입력해주세요. e.g 눈 맞고 있는 강아지" />
      </div>
      <CardWrap>
        <div className="left">left</div>
        <div className="right">right</div>
      </CardWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  gap: 50px;
`;

const TextArea = styled.textarea``;

const CardWrap = styled.div`
  display: flex;
  height: 400px;
  width: 600px;
  background-color: lightgrey;
  border-radius: 10px;
  border: 1px solid black;
  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    color: blue;
  }
  .right {
    color: red;
  }
`;

export default Home;

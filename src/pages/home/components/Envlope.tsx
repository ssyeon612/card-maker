import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Envlope = () => {
  return (
    <Card>
      <Link to="/card">
        <Heart></Heart>
      </Link>
    </Card>
  );
};

export default Envlope;

// 카드
const Card = styled.div`
  width: 0;
  height: 0;
  border-top: 150px solid #fff;
  border-right: 250px solid #eee;
  border-bottom: 150px solid #ddd;
  border-left: 250px solid #eee;
  border-radius: 20px;
`;

// 하트
const heartbeat = keyframes`
  0% {transform: translate(-50%, -50%) rotate(45deg) scale(1)}
  25% {transform: translate(-50%, -50%) rotate(45deg) scale(1)}
  30% {transform: translate(-50%, -50%) rotate(45deg) scale(1.2)}
  50% {transform:  ranslate(-50%, -50%) rotate(45deg) scale(1.4)}
  70% {transform: translate(-50%, -50%) rotate(45deg) scale(1.2)}
  100% {transform: translate(-50%, -50%) rotate(45deg) scale(1)}
`;

const Heart = styled.div`
  width: 36px;
  height: 36px;
  background: #ff3838;
  transform: translate(-50%, -50%) rotate(45deg);
  animation: ${heartbeat} 1.4s linear infinite;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 36px;
    height: 36px;
    background: #ff3838;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    width: 36px;
    height: 36px;
    background: #ff3838;
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;

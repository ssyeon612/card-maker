import { useState } from "react";
import styled from "styled-components";

export interface SelectImage {
  setImage: (params: string) => void;
}

export default function SelectImage(props: SelectImage) {
  const [searchText, setSearchText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Contianer>
      <h3>카드 사진을 입력해주세요</h3>
      <hr></hr>
      <InputBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <Input onChange={onChange} />
        <SearchButton onClick={() => props.setImage(searchText)}>검색</SearchButton>
      </InputBox>
    </Contianer>
  );
}

const Contianer = styled.div`
  background-color: lightcyan;
  padding: 1rem;
  border-radius: 20px;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const InputBox = styled.div`
  position: relative;
  height: 60px;
  max-width: 900px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  svg {
    width: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  border: none;
  padding: 0 155px 0 65px;
  background-color: transparent;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  background-color: #4070f4;
  cursor: pointer;
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`;

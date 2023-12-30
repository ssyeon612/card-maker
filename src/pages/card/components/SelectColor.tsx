import styled from "styled-components";

export interface SelectColorProps {
  setColor: (params: string) => void;
}

export default function SelectColor(props: SelectColorProps) {
  const colors = [
    { name: "Pink", value: "#E91E63" },
    { name: "Indigo", value: "#3F51B5" },
    { name: "Cyan", value: "#E0F7FA80" },
  ];

  return (
    <Contianer>
      <h3>카드 색상을 골라주세요</h3>
      <hr></hr>
      <ColorUl>
        {colors.map((color) => (
          <ColorLi color={color.value} onClick={() => props.setColor(color.value)}>
            <span className="round"></span>
            {color.name}
          </ColorLi>
        ))}
      </ColorUl>
    </Contianer>
  );
}

const Contianer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const ColorUl = styled.ul`
  display: flex;
  gap: 10px;
`;

const ColorLi = styled.li`
  color: ${(props) => props.color};
  /* background-color: ${(props) => props.color}; */
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  .round {
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  }
`;

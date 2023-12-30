import styled from "styled-components";

export default function SelectBox() {
  return (
    <SelectArea>
      <li>
        {colors.map((color, index) => (
          <span key={index}>
            <input type="radio" value={color} />
          </span>
        ))}
      </li>
      <li>Color</li>
      <li>
        <input onChange={handleChange} />
      </li>
      <button>Submit</button>
    </SelectArea>
  );
}

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

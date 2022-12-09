import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const DropdownForm = styled.form`
  position: relative;
  width: 200px;
`;

const DropdownButton = styled.button`
  background-color: white;
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 2px;
`;
const Content = styled.div`
  background-color: yellow;
  width: 200px;
  max-height: ${(props) => (props.open ? "max-content" : "0px")};
  overflow: hidden;
`;

const Option = styled.div`
  position: relative;
  height: 24px;
  border: 1px solid red;
`;
const Input = styled.input``;

const Label = styled.label`
  margin-left: 10px;
`;

function Dropdown({}) {
  const options = [
    { id: "001", label: "one" },
    { id: "002", label: "two" },
    { id: "003", label: "three" },
    { id: "004", label: "four" },
    { id: "005", label: "five" },
  ];
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const save = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log([...formData.entries()]);
  };

  const handleClick = (option) => {
    console.log(option.id, option.label);
    setSelectedOption(option.label);
  };

  return (
    <DropdownForm onSubmit={save}>
      <DropdownButton type="button" onClick={() => setOpen((prev) => !prev)}>
        {selectedOption}
      </DropdownButton>
      <Content open={open}>
        {options.map((option) => (
          <Option key={option.id} onClick={() => handleClick(option)}>
            <input
              type="radio"
              id={option.id}
              value={option.id}
              name="numbers"
              checked={option.label === selectedOption ? true : false}
              readOnly
              hidden
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </Option>
        ))}
      </Content>
      <button>SUBMIT</button>
    </DropdownForm>
  );
}

export default Dropdown;

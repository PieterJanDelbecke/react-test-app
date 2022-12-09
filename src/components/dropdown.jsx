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
  /* height: 300px; */
`;

const Option = styled.div`
  position: relative;
  height: 24px;
  border: 1px solid red;
`;
const Input = styled.input`
  /* visibility: hidden; */
  /* height: 0;
  width: 0; */
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 24px;
  z-index: 1;
`;

const Label = styled.label`
  position: absolute;
  left: 10px;
  z-index: 0;
`;

function Dropdown({}) {
  const options = [
    { id: "001", label: "one" },
    { id: "002", label: "two" },
    { id: "003", label: "three" },
    { id: "004", label: "four" },
    { id: "005", label: "five" },
  ];
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  useEffect(() => {
    inputRef.current.value = options[0].label;
  }, []);

  const save = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    const formData = new FormData(e.target);
    console.log([...formData.entries()]);
  };

  const handleClick = (e) => {
    console.log("CLICKED");
    setSelectedOption(e.target.value);
    inputRef.current.value = e.target.value;
    console.log(e.target.value);
  };

  console.log("OPEN:", open);

  return (
    <DropdownForm onSubmit={save}>
      <DropdownButton type="button" onClick={() => setOpen((prev) => !prev)}>
        {selectedOption}
      </DropdownButton>
      {/* {open && ( */}
      <Content>
        {options.map((option) => (
          <Option key={option.id} onClick={handleClick}>
            <Input
              ref={inputRef}
              type="radio"
              id={option.id}
              value={option.label}
              name="numbers"
            />
            <Label htmlFor="numbers">{option.label}</Label>
          </Option>
        ))}
      </Content>
      {/* )} */}
      <button>SUBMIT</button>
    </DropdownForm>
  );
}

export default Dropdown;

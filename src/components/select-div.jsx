import { useState } from "react";
import styled from "@emotion/styled";

const DropdownForm = styled.form`
  display: inline-flex;
`;

const DropdownContainer = styled.div`
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
  display: flex;
  height: 24px;
  border: 1px solid red;
`;

const CheckIconDiv = styled.div`
  width: 20px;
`;

const Button = styled.button`
  margin-left: 20px;
  width: 80px;
  height: 24px;
`;

function SelectDiv() {
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
      <DropdownContainer>
        <DropdownButton type="button" onClick={() => setOpen((prev) => !prev)}>
          {selectedOption}
        </DropdownButton>
        <Content open={open}>
          {options.map((option) => (
            <>
              <Option key={option.id} onClick={() => handleClick(option)}>
                <CheckIconDiv>
                  {selectedOption === option.label && <label>v</label>}
                </CheckIconDiv>
                {option.label}
              </Option>
            </>
          ))}
        </Content>
        <input name="numbers" value={selectedOption || ""} hidden readOnly />
      </DropdownContainer>
      <Button>SUBMIT</Button>
    </DropdownForm>
  );
}

export default SelectDiv;

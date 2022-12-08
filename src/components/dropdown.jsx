import { useState } from "react";
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
  height: 300px;
`;

const Option = styled.div`
  height: 24px;
  border: 1px solid red;
`;
const Input = styled.input`
  /* display: none; */
`;

function Dropdown({}) {
  const handleClickFilm = () => {
    console.log("Film");
  };

  const handleClickMusic = () => {
    console.log("Music");
  };
  const handleClickArt = () => {
    console.log("Art");
  };

  const save = (e) => {
    console.log("SUBMIT");
  };

  return (
    <DropdownForm onSubmit={save}>
      <DropdownButton type="button" onClick={() => setOpen((prev) => !prev)}>
        Click
      </DropdownButton>
      <Content>
        <Option>
          <input type="radio" value="one" name="numbers" />
          <label htmlFor="numbers">One</label>
        </Option>
        <Option>
          <input type="radio" value="two" name="numbers" />
          <label htmlFor="numbers">two</label>
        </Option>
        <Option>
          <input type="radio" value="three" name="numbers" />
          <label htmlFor="numbers">three</label>
        </Option>
      </Content>
      <button>SUBMIT</button>
    </DropdownForm>
  );
}

export default Dropdown;

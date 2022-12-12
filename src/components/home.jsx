import React from "react";
import styled from "@emotion/styled";

import SelectRadioBtn from "./select-radio-btn";
import SelectDiv from "./select-div";

const Container = styled.div`
  border: 1px solid red;
  min-height: 250px;
`;

const Header = styled.h4`
  margin: 5px;
`;

function Home() {
  return (
    <>
      <Container>
        <Header>Select using RadioBtn:</Header>
        <SelectRadioBtn />
      </Container>
      <Container>
        <Header>Select using Div:</Header>
        <SelectDiv />
      </Container>
    </>
  );
}

export default Home;

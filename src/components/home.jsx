import React from "react";
import styled from "@emotion/styled";

import RadioBtnSelect from "./select-radio-btn";

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
        <Header>RadioBtn Dropdown:</Header>
        <RadioBtnSelect />
      </Container>
      <Container>
        <Header>Div Dropdown:</Header>
      </Container>
    </>
  );
}

export default Home;

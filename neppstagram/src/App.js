import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { getCurrentUser } from "./api/auth";
import Header from "./component/common/Header";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  // App이 마운트 되자마자 login 페이지 이동

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #eee;
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  flex: 1;
  background-color: #fff;
`;

export default App;

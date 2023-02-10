import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  // App이 마운트 되자마자 login 페이지 이동
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

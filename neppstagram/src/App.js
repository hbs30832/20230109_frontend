import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { theme } from "./styles";
import { useEffect } from "react";
import { fetchUser } from "./redux/user";

function App() {
  // App이 마운트 되자마자 login 페이지 이동
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.data) dispatch(fetchUser());
  }, [dispatch, user]);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

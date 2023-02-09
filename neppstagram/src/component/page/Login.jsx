import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser } from "../../api/auth";
import Redirect from "../common/Redirect";
import LoginForm from "../login/LoginForm";

// src/component/page/Login.jsx
function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then((data) => {
      setUser(data);
    });
  }, []);

  if (user) return <Redirect to="/home" />;

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Login;

import styled from "styled-components";
import SignUpForm from "../login/SignUpForm";

// src/component/page/SignUp.jsx
function SignUp() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #eee;
`;

export default SignUp;

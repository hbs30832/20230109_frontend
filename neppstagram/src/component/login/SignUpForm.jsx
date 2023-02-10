import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { signUpUser } from "../../api/auth";
import Button from "../common/Button";
import Input from "../common/Input";

// LoginForm.jsx
function SignUpForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signUpUser(inputs);

    if (data.success) {
      alert("회원가입에 성공했습니다.");
      navigate("/");
    }
  };

  return (
    <Container>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="name"
          value={inputs.name}
          onChange={handleInputs}
          name="name"
          placeholder="이름을 입력하세요."
        />
        <Input
          type="email"
          value={inputs.email}
          onChange={handleInputs}
          name="email"
          placeholder="이메일을 입력하세요."
        />
        <Input
          type="password"
          value={inputs.password}
          onChange={handleInputs}
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <BtnBox>
          <Button>SignUp</Button>
          <Button type="button" bgColor="red" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </BtnBox>
      </form>
    </Container>
  );
}

// 너비 500px, padding 20px, 흰색 배경
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: 50px 0;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const BtnBox = styled.div`
  margin-top: 10px;
`;

export default SignUpForm;

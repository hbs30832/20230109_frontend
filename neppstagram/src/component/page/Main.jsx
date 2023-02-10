import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";

function Main() {
  const user = useSelector((state) => state.user);

  if (user.isLoading) return null;

  if (!user.data) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
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

export default Main;

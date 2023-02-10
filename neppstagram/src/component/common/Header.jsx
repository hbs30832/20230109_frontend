import { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Input from "./Input";

function Header() {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Wrapper>
        <h1>Neppstagram</h1>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            <>
              <AiOutlineSearch />
              검색
            </>
          }
        />
        <Gnb>
          <GnbList>
            <li>
              <Link to="/post">
                <AiOutlineHome />
              </Link>
            </li>
            <li>
              <Link to="search">
                <AiOutlineSearch />
              </Link>
            </li>
            <li>
              <Link to="post/edit">
                <AiOutlineEdit />
              </Link>
            </li>
            <li>
              <Link to="profile">
                <AiOutlineUser />
              </Link>
            </li>
          </GnbList>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_Color};
  padding: 10px 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
`;

const Gnb = styled.nav``;

const GnbList = styled.ul`
  display: flex;
  gap: 10px;
`;

export default Header;

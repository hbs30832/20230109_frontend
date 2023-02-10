import { useState } from "react";
import styled from "styled-components";
import ImageCrop from "../common/ImageCrop";

// src/component/profile/ProfileBox.jsx
function ProfileBox() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <ImageBox>
          <img
            src="https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg"
            alt=""
          />
        </ImageBox>
        <UserName>황보석</UserName>
      </Container>
      <ImageCrop />
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 30px;
`;

export default ProfileBox;

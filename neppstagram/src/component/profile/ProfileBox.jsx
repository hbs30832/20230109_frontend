import { useState } from "react";
import styled from "styled-components";
import ImageCrop from "../common/ImageCrop";

// src/component/profile/ProfileBox.jsx
function ProfileBox() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleInput = (e) => {
    const reader = new FileReader();

    // 변환이 완료되면 실행될 코드(비동기)
    reader.onload = () => {
      setUrl(reader.result);
    };

    // File 객체를 url로 변환
    reader.readAsDataURL(e.target.files[0]);

    setOpen(true);
  };

  return (
    <>
      <Container>
        <input
          type="file"
          accept="image/*"
          id="image"
          style={{ display: "none" }}
          onChange={handleInput}
        />
        <ImageBox htmlFor="image">
          <img src={url} alt="" />
        </ImageBox>
        <UserName>황보석</UserName>
      </Container>
      {open && (
        <ImageCrop closeModal={() => setOpen(false)} originalUrl={url} />
      )}
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

const ImageBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;
  cursor: pointer;

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

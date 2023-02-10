import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import ImageCrop from "../common/ImageCrop";

function PostEdit() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    url: "",
    filename: "",
  });
  // 자른 파일 받아서 url, filename 업데이트

  const handleCrop = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: e.target.files[0].filename,
      });
      setOpen(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleImage = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: file.name,
      });
      setOpen(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="image"
          onChange={handleCrop}
        />
        <PreviewBox htmlFor="image">
          <img src={image.url} alt="" />
        </PreviewBox>
        <InputBody />
        <Button>Submit</Button>
      </Container>
      {open && (
        <ImageCrop
          closeModal={() => setOpen(false)}
          originalUrl={image.url}
          onSubmit={handleImage}
          filename={image.filename}
        />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PreviewBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.bd_color};
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const InputBody = styled.textarea`
  resize: none;
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
`;

export default PostEdit;

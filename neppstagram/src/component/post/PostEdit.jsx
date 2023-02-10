import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { createPost } from "../../api/auth";
import Button from "../common/Button";
import ImageCrop from "../common/ImageCrop";

function PostEdit() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({
    url: "",
    filename: "",
  });
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  // 자른 파일 받아서 url, filename 업데이트

  const handleCrop = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: e.target.files[0].name,
      });
      setOpen(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleImage = (file) => {
    setFile(file);
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

  const handleSubmit = async () => {
    const form = new FormData();

    form.append("files", file);
    form.append("body", body);

    await createPost(form);

    navigate("/post");
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
        <InputBody onChange={(e) => setBody(e.target.value)} />
        <Button onClick={handleSubmit}>Submit</Button>
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

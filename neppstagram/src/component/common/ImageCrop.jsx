import { useState } from "react";
import { Cropper } from "react-cropper";
import styled from "styled-components";
import Button from "./Button";
import "cropperjs/dist/cropper.css";

// src/component/common/ImageCrop.jsx
function ImageCrop({ closeModal, originalUrl }) {
  const [cropper, setCropper] = useState();
  const [croppedData, setCroppedData] = useState();

  const getCroppedData = () => {
    setCroppedData(cropper.getCroppedCanvas().toDataURL());
  };

  console.log(croppedData);

  console.log(cropper);
  return (
    <Background>
      <Container>
        <Cropper
          style={{ width: "100%", height: "100%" }}
          onInitialized={(instace) => setCropper(instace)}
          src={originalUrl}
          preview=".preview"
          minCropBoxHeight={100}
          initialAspectRatio={1}
          aspectRatio={1}
        ></Cropper>
      </Container>
      <Button width={100} onClick={getCroppedData}>
        crop
      </Button>
      <Button onClick={closeModal} width={100} bgColor="#bbb">
        Close
      </Button>
      <PreviewBox>
        <img src={croppedData} alt="" />
      </PreviewBox>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
`;

const PreviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
  }
`;

export default ImageCrop;

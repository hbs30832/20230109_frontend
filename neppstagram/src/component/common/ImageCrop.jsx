import styled from "styled-components";

// src/component/common/ImageCrop.jsx
function ImageCrop() {
  return <Background></Background>;
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

export default ImageCrop;

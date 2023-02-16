import { useState } from "react";
import styled, { keyframes } from "styled-components";

const initialState = [
  { id: 1, text: "첫번째", bgColor: "red" },
  { id: 2, text: "두번째", bgColor: "yellow" },
  { id: 3, text: "세번째", bgColor: "green" },
  { id: 1, text: "첫번째", bgColor: "red" },
  { id: 1, text: "두번째", bgColor: "yellow" },
];

function Slide() {
  const [slides, setSlides] = useState(initialState);
  return (
    <Container>
      <Wrapper>
        {slides.map((slide) => (
          <Item key={slide.id} bgColor={slide.bgColor}>
            {slide.text}
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
}

const slide = keyframes`
    to {
        transform: translate(-900px);
    }
  
`;

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid black;
`;

const Wrapper = styled.ul`
  display: flex;

  animation: ${slide} 5s linear infinite;
`;

const Item = styled.li`
  list-style: none;
  flex-shrink: 0;
  width: 300px;
  height: 200px;

  background-color: ${({ bgColor }) => bgColor};
`;

export default Slide;

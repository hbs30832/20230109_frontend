import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: ${({ width }) => width || 200}px;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.colors.main_color};
  color: ${({ color }) => color || "#fff"};
  outline: none;
  border: none;
  font-size: 0.8rem;
  padding: 4px 0;

  border-radius: 4px;

  cursor: pointer;

  & + & {
    margin-top: 3px;
  }
`;

export default Button;

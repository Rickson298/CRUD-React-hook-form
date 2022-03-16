import styled from "styled-components";

interface PropsIconStyled {
  color?: string;
  background?: string;
}

export const IconStyled = styled.button<PropsIconStyled>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  color: #ccc;
  font-size: 18px;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    color: ${({ color }) => color || "white"};
    background: ${({ background }) => background || "gray"};
  }
`;

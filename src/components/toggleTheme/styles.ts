import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 20px;
  background: ${({ theme: { colors } }) => colors.backgroundSecundary};
  border: ${({ theme: { colors } }) => colors.border};
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 15px;
    transition: all ease 0.3s;
    inset: ${({ theme: { title } }) =>
      `0px 0px 0px ${title === "light" ? "-60px" : "60px"}`};
    margin: auto;
    border-radius: 50%;
    height: 15px;
    background: #ccc;
  }
`;

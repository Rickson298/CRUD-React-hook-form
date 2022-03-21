import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  padding: 35px;
  background: ${({ theme: { colors } }) => colors.backgroundPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 750px) {
    padding: 20px;
  }
`;

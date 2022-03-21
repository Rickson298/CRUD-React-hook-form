import styled from "styled-components";

export const Input = styled.input`
  width: 650px;
  padding: 15px;
  border: none;
  background: #7b68ee;
  outline: none;
  border-radius: 8px;
  margin-bottom: 20px;
  color: white;
  &::placeholder {
    color: white;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Books = styled.div`
  min-height: 650px;
  width: 650px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 16px;
  border: ${({ theme: { colors } }) => colors.border};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.backgroundSecundary};

  @media (max-width: 750px) {
    width: 100%;
  }

  .container-books {
    transition: all ease 2s;
    display: flex;
    flex-direction: column;
  }

  .add-more-button {
    margin-top: auto;
    background: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: ${({ theme: { colors } }) => colors.border};
    margin-left: auto;
    transition: all ease 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: 22px;
    &:hover {
      background: #7b68ee;
      color: white;
    }
  }
`;

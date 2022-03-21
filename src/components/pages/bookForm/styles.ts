import styled from "styled-components";

export const Container = styled.div`
  min-height: 650px;
  width: 650px;

  .arrow-back {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all ease 0.2s;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      background: ${({ theme: { colors } }) => colors.backgroundSecundary};
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 16px;
  border: ${({ theme: { colors } }) => colors.border};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.backgroundSecundary};

  .submit {
    background: none;
    border: ${({ theme: { colors } }) => colors.border};
    padding: 15px;
    border-radius: 8px;
    color: ${({ theme: { colors } }) => colors.textPrimary};

    transition: all ease 0.2s;
    &:hover {
      color: white;
      background: #7b68ee;
      cursor: pointer;
    }
  }
  .title-form {
    font-size: 26px;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 5px;

  .star-icon {
    transition: all ease 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
`;

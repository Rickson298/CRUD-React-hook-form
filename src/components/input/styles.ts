import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    resize: none;
    width: 100%;
    height: 250px;
    overflow: auto;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  input,
  textarea {
    border: ${({ theme: { colors } }) => colors.border};
    padding: 15px;
    border-radius: 8px;
    outline: none;
    transition: all ease 0.2s;
    background: ${({ theme: { colors } }) => colors.backgroundSecundary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    &:focus {
      box-shadow: 1px 1px 6px 1px #7b68ee;
    }
  }

  .message-error {
    font-size: 12px;
    color: red;
  }
`;

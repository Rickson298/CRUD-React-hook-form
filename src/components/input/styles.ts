import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    resize: none;
    width: 100%;
    height: 250px;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    padding: 15px;
  }

  input {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    outline: none;
  }

  textarea,
  input {
    &:focus {
      background: #f5f5f5;
    }
  }

  .message-error {
    font-size: 12px;
    color: red;
  }
`;

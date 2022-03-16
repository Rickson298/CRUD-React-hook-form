import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 35px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  min-height: 650px;
  width: 650px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 16px;
  box-shadow: 1px 1px 4px 1px #ccc;
  background: white;

  .message-error {
    font-size: 12px;
    color: red;
  }

  .submit {
    background: none;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    transition: all ease 0.2s;
    &:hover {
      color: white;
      background: lightBlue;
      cursor: pointer;
    }
  }
  .group-input {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

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

  .title-form {
    font-size: 26px;
  }
`;

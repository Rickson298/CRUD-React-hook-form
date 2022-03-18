import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  padding: 35px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    min-height: 650px;
    width: 650px;

    .arrow-back {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: all ease 0.2s;
      cursor: pointer;
      margin-bottom: 10px;
      &:hover {
        background: #ccc;
      }
    }

    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 16px;
  box-shadow: 1px 1px 4px 1px #ccc;
  background: white;

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
  .title-form {
    font-size: 26px;
  }
`;

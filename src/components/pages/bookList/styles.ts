import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  padding: 35px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 650px;
    border: 1px solid #ccc;
    padding: 10px;
    outline: none;
    border-radius: 8px;
    margin-bottom: 10px;
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
  box-shadow: 1px 1px 4px 1px #ccc;
  background: white;

  .add-more-button {
    margin-top: auto;
    background: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #ccc;
    margin-left: auto;
    transition: all ease 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: 22px;
    &:hover {
      background: lightBlue;
      color: white;
    }
  }
`;

export const Stars = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  height: max-content;
`;

export const IconsBook = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  top: 15px;
  right: 15px;
  transition: all ease 0.2s;
  opacity: 0;
`;

import styled from "styled-components";
import { IconsBook } from "../pages/bookList/styles";

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  height: 150px;
  padding: 15px;
  transition: all ease 0.2s;
  background: white;
  box-shadow: 1px 1px 2px 1px #ccc;
  color: gray;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 7px 1px #ccc;
  }

  .header-book {
    width: 100%;
    height: max-content;
    margin-bottom: 5px;
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
    }
  }

  .book-description {
    height: 100%;
    text-overflow: ellipsis;
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }

  .book-name {
    font-size: 22px;
    font-weight: 600;
    margin-right: 15px;
    @media (max-width: 750px) {
      font-size: 16px;
      width: 100%;
    }
  }

  .book-author {
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }

  &:hover ${IconsBook} {
    opacity: 1;
  }
`;

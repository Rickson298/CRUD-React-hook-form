import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface DataBooks {
  id: number;
  name: string;
  description: string;
  author: string;
  rating: string | number;
  createdAt: string;
  updatedAt: string;
}

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 35px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Stars = styled.div`
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

interface PropsIconStyled {
  color?: string;
  background?: string;
}

export const IconStyled = styled.button<PropsIconStyled>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  color: #ccc;
  font-size: 18px;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    color: ${({ color }) => color || "white"};
    background: ${({ background }) => background || "gray"};
  }
`;

interface PropsIcon extends PropsIconStyled {
  icon: JSX.Element;
  onClick: () => void;
}

export const Icon: React.FC<PropsIcon> = ({ icon, ...rest }) => (
  <IconStyled {...rest}>{icon}</IconStyled>
);

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

export const BookList = () => {
  const { getData, data: books, deleteData } = useApi();
  useEffect(() => {
    getData("/books");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <Books>
        {books.map((book: DataBooks) => (
          <Book>
            <div className="header-book">
              <span className="book-name">{book.name}</span>
              <span className="book-author">{book.author}</span>
            </div>
            <div className="book-description">{book.description}</div>
            <Stars>
              {Array.from({ length: Number(book.rating) }).map((item) => (
                <AiFillStar color="gold" />
              ))}
            </Stars>
            <IconsBook>
              <Icon
                onClick={() => deleteData(`/books/${book.id}`)}
                background="red"
                icon={<BsTrash />}
              />
              <Icon
                onClick={() => navigate(`/edit-book/${book.id}`)}
                icon={<BiPencil />}
              />
            </IconsBook>
          </Book>
        ))}
      </Books>
    </Container>
  );
};

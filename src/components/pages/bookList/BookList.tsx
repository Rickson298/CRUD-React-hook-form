import { useEffect, useState } from "react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { Book } from "../../book/Book";
import { Icon } from "../../icon/Icon";
import * as C from "./styles";

interface DataBooks {
  id: number;
  name: string;
  description: string;
  author: string;
  rating: string | number;
  createdAt: string;
  updatedAt: string;
}

export const BookList = () => {
  const { getData, data: books, deleteData } = useApi();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const booksFiltered = books.filter((book: DataBooks) =>
    book.name.toUpperCase().includes(search.toUpperCase())
  );

  useEffect(() => {
    getData("/books");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <C.Container>
      <input
        placeholder="Pesquise um Livro"
        onChange={(e) => setSearch(e.target.value)}
      />
      <C.Books>
        {booksFiltered.map((book: DataBooks) => (
          <Book>
            <div className="header-book">
              <span className="book-name">{book.name}</span>
              <span className="book-author">{book.author}</span>
            </div>
            <div className="book-description">{book.description}</div>
            <C.Stars>
              {Array.from({ length: Number(book.rating) }).map((item) => (
                <AiFillStar color="gold" />
              ))}
            </C.Stars>
            <C.IconsBook>
              <Icon
                onClick={async () => {
                  await deleteData(`/books/${book.id}`);
                  getData("/books");
                }}
                background="red"
                icon={<BsTrash />}
              />
              <Icon
                onClick={() => navigate(`/edit-book/${book.id}`)}
                icon={<BiPencil />}
              />
            </C.IconsBook>
          </Book>
        ))}
        <button
          onClick={() => navigate("/new-book")}
          className="add-more-button"
        >
          <IoIosAdd />
        </button>
      </C.Books>
    </C.Container>
  );
};

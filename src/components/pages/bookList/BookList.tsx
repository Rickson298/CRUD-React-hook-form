import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { DataBooks } from "../../../types/typeBooks";
import { Book } from "../../book/Book";
import * as C from "./styles";

export const BookList = () => {
  const { getData, data: books } = useApi();
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
    <>
      <C.Input
        placeholder="Pesquise um Livro"
        onChange={(e) => setSearch(e.target.value)}
      />
      <C.Books>
        <div className="container-books">
          {booksFiltered.map((book: DataBooks) => (
            <Book
              id={book.id}
              author={book.author}
              name={book.name}
              description={book.description}
              rating={book.rating}
              key={book.id}
            />
          ))}
        </div>
        <button
          onClick={() => navigate("/new-book")}
          className="add-more-button"
        >
          <IoIosAdd />
        </button>
      </C.Books>
    </>
  );
};

import React from "react";
import { Route, Routes } from "react-router";
import { BookForm } from "./components/pages/bookForm/BookForm";
import { BookList } from "./components/pages/bookList/BookList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/edit-book/:id" element={<BookForm />} />
        <Route path="/new-book" element={<BookForm />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/container/Container";
import { BookForm } from "./components/pages/bookForm/BookForm";
import { BookList } from "./components/pages/bookList/BookList";
import { ToggleTheme } from "./components/toggleTheme/ToggleTheme";
import usePersistedState from "./hooks/usePersistState";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);
  const changeTheme = () => {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToggleTheme onClick={changeTheme} />
        <Routes>
          <Route path="/edit-book/:id" element={<BookForm />} />
          <Route path="/new-book" element={<BookForm />} />
          <Route path="/" element={<BookList />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

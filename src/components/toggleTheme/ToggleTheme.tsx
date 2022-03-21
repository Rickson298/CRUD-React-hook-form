import * as C from "./styles";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface PropsToggleTheme {
  onClick: () => void;
}

export const ToggleTheme: React.FC<PropsToggleTheme> = ({ onClick }) => {
  const { title } = useContext(ThemeContext);

  return (
    <C.Container onClick={onClick}>
      {title === "dark" ? (
        <BsFillMoonFill color="#ccc" />
      ) : (
        <BsFillSunFill color="gold" />
      )}
    </C.Container>
  );
};

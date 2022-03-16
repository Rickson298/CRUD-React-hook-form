import * as C from "./styles";

interface PropsIcon {
  icon: JSX.Element;
  onClick: () => void;
  color?: string;
  background?: string;
}

export const Icon: React.FC<PropsIcon> = ({ icon, ...rest }) => (
  <C.IconStyled {...rest}>{icon}</C.IconStyled>
);

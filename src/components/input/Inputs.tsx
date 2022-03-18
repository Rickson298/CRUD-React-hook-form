import { useFormContext } from "react-hook-form";
import * as C from "./styles";

interface Props {
  name: string;
  messageError?: string;
  type?: string;
  label?: string;
}

export const Input = ({ name, type = "text", messageError, label }: Props) => {
  const { register } = useFormContext();
  return (
    <C.Container>
      <label htmlFor="name">{label}</label>
      <input type="text" {...register(name)} />
      <span className="message-error">{messageError}</span>
    </C.Container>
  );
};

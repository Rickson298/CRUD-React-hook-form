import { useFormContext } from "react-hook-form";
import { Label } from "../label/Label";
import * as C from "./styles";

interface Props {
  name: string;
  messageError?: string;
  type?: string;
  label?: string;
  form?: boolean;
  textarea?: boolean;
}

export const Input = ({
  name,
  type = "text",
  messageError,
  label,
  form,
  textarea,
}: Props) => {
  const { register } = useFormContext();
  return (
    <C.Container>
      <Label htmlFor={name}>{label}</Label>
      {textarea ? (
        <textarea {...register(name)} />
      ) : form ? (
        <input type={type} {...register(name)} />
      ) : (
        <input type={type} />
      )}

      <span className="message-error">{messageError}</span>
    </C.Container>
  );
};

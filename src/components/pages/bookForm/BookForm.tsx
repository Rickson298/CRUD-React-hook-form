import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as C from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { formBookValidation } from "../../../validations/formBookValidation";

interface UseFormInputs {
  name: string;
  author: string;
  description: string;
  rating: string;
}

export const BookForm = () => {
  let { id } = useParams();
  const { getData, data, putData, postData } = useApi();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UseFormInputs>({
    resolver: yupResolver(formBookValidation),
  });
  const navigate = useNavigate();

  const onSubmit = (dataForm: UseFormInputs) => {
    id
      ? putData(`books/${id}`, dataForm)
      : postData("books", {
          name: dataForm.name,
          author: dataForm.author,
          description: dataForm.description,
          rating: dataForm.rating,
        });
    navigate("/");
  };

  useEffect(() => {
    id && getData(`/books/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span className="title-form">
            {id ? "Editar Livro" : "Cadastrar Livro"}
          </span>
        </div>
        <input type="text" {...register("name")} />
        {errors.name?.message}
        <input type="text" {...register("author")} />
        <input type="text" {...register("description")} />
        <input type="text" {...register("rating")} />
        <input type="submit" value="Enviar" />
      </C.Form>
    </C.Container>
  );
};

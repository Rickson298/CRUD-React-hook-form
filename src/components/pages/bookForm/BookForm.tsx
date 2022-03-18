import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as C from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { formBookValidation } from "../../../validations/formBookValidation";
import { Input } from "../../input/Inputs";

interface UseFormInputs {
  name: string;
  author: string;
  description: string;
  rating: string;
}

export const BookForm = () => {
  let { id } = useParams();
  const { getData, data, putData, postData } = useApi();
  const navigate = useNavigate();
  const methods = useForm<UseFormInputs>({
    resolver: yupResolver(formBookValidation),
  });
  const {
    formState: { errors },
  } = methods;

  const onSubmit = async (dataForm: UseFormInputs) => {
    id
      ? await putData(`books/${id}`, dataForm)
      : await postData("books", {
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
    methods.reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <C.Container>
      <FormProvider {...methods}>
        <C.Form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <span className="title-form">
              {id ? "Editar Livro" : "Cadastrar Livro"}
            </span>
          </div>
          <Input
            label="Nome do livro"
            messageError={errors.name?.message}
            name="name"
          />
          <Input
            label="Autor"
            messageError={errors.author?.message}
            name="author"
          />
          <Input
            label="Descrição"
            messageError={errors.description?.message}
            name="description"
          />
          <Input
            label="Avaliação"
            messageError={errors.rating?.message}
            name="rating"
          />
          {/* <div className="group-input">
          <label htmlFor="name">Nome do Livro</label>
          <input id="name" type="text" {...register("name")} />
          <span className="message-error">{errors.name?.message}</span>
        </div>
        <div className="group-input">
          <label htmlFor="name">Author</label>
          <input type="text" {...register("author")} />
          <span className="message-error">{errors.author?.message}</span>
        </div>
        <div className="group-input">
          <label htmlFor="name">Descrição</label>
          <textarea {...register("description")} />
          <span className="message-error">{errors.description?.message}</span>
        </div>
        <div className="group-input">
        <label htmlFor="name">Avaliação</label>
        <input type="text" {...register("rating")} />
        <span className="message-error">{errors.rating?.message}</span>
        </div>  */}
          <input type="submit" className="submit" value="Enviar" />
        </C.Form>
      </FormProvider>
    </C.Container>
  );
};

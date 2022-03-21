import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { formBookValidation } from "../../../validations/formBookValidation";
import { Input } from "../../input/Input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import * as C from "./styles";
import { Label } from "../../label/Label";

interface UseFormInputs {
  name: string;
  author: string;
  description: string;
  rating: number;
}

export const BookForm = () => {
  const { id } = useParams();
  const { getData, data, putData, postData } = useApi();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const methods = useForm<UseFormInputs>({
    resolver: yupResolver(formBookValidation),
  });

  const {
    formState: { errors },
    setValue,
    getValues,
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

  const getRating = getValues("rating");

  const handleStarsColored = (currentStarIndex: number) =>
    currentStarIndex + 1 <= (getRating || rating) ? "gold" : "gray";

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
      <MdOutlineKeyboardArrowLeft
        className="arrow-back"
        onClick={() => navigate("/")}
      />
      <FormProvider {...methods}>
        <C.Form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <span className="title-form">
              {id ? "Editar Livro" : "Cadastrar Livro"}
            </span>
          </div>
          <Input
            form
            label="Nome do livro"
            messageError={errors.name?.message}
            name="name"
          />
          <Input
            form
            label="Autor"
            messageError={errors.author?.message}
            name="author"
          />
          <Input
            textarea
            label="Descrição"
            messageError={errors.description?.message}
            name="description"
          />
          <C.Rating>
            <Label>Avaliação</Label>
            <C.Stars>
              {Array.from({ length: 5 }).map((_, index) => (
                <AiFillStar
                  className="star-icon"
                  onClick={() => {
                    setRating(index + 1);
                    setValue("rating", index + 1);
                  }}
                  color={handleStarsColored(index)}
                />
              ))}
            </C.Stars>
          </C.Rating>
          <input type="submit" className="submit" value="Enviar" />
        </C.Form>
      </FormProvider>
    </C.Container>
  );
};

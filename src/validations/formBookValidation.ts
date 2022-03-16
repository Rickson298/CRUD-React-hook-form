import * as yup from "yup";

export const formBookValidation = yup
  .object({
    name: yup.string().required("Nome do Livro precisa ser preenchido"),
    author: yup.string().required("Nome do autor precisa ser preenchido"),
    description: yup.string().required("Descrição para ser preenchida"),
    rating: yup
      .number()
      .required("Avaliação precisa ser preenchida")
      .typeError("Avaliação precisa ser um número"),
  })
  .required();

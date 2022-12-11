import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessageForm from "../components/ErrorMessageForm";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AccountService from "../services/AccountService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve possuir no mínimo 3 caracteres")
    .max(50, "Nome deve possuir no máximo 50 caracteres")
    .required("O nome do proprietário é obrigatório!"),
  cpf: Yup.string()
    .required("O CPF do proprietário é obrigatório!")
    .matches(/^[0-9]+$/, "Deve conter apenas números")
    .min(11, "Deve conter exatos 11 dígitos")
    .max(11, "Deve conter exatos 11 dígitos"),
});

export const NewAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="items-center gap-2 mx-auto flex rounded-2xl bg-bgQuaternary p-3 m-2">
        <IoArrowBackCircleSharp
          color="white"
          fontSize={40}
          onClick={() => navigate("/")}
          cursor="pointer"
          className="transition duration-500 hover:scale-110"
        />
        <h1 className="text-center text-white font-bold text-2xl">
          Cadastro de nova conta
        </h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          cpf: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          AccountService.addAccount(values).then(
            (response) => {
              if (response.status === 201) {
                toast.success("Conta criada com sucesso!", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            },
            (err) => {
              if (err.response.data.match("CPF informado")) {
                toast.warning("Esse CPF já foi cadastrado!");
              } else {
                toast.warning(
                  "Erro ao criar conta! Tente novamente mais tarde!"
                );
              }
            }
          );
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-bgQuaternary  rounded-3xl shadow-lg text-white mt-5 p-6 w-2/5">
            <h3 className="font-semibold">Nome do proprietário</h3>
            <Field
              placeholder="Digite aqui o nome do proprietário"
              className="w-full
            px-3
            py-1.5
            text-gray-700
            border border-solid border-bgTertiary
            rounded-xl
            focus:outline-none
            bg-bgInput
            "
              name="name"
            />
            <div className="w-full h-14 py-2">
              {errors.name && touched.name ? (
                <ErrorMessageForm error={errors.name} />
              ) : null}
            </div>

            <h3 className="font-semibold">
              CPF do proprietário (apenas números)
            </h3>
            <Field
              placeholder="Digite aqui o CPF do proprietário"
              name="cpf"
              className="w-full
            px-3
            py-1.5
            text-gray-700
            border border-solid border-bgTertiary
            rounded-xl
            focus:outline-none
            bg-bgInput"
            />
            <div className="w-full h-14 py-2">
              {errors.cpf && touched.cpf ? (
                <ErrorMessageForm error={errors.cpf} />
              ) : null}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 p-2 text-center mt-32"
              >
                <p className="text-center font-bold">Criar conta</p>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default NewAccount;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessageForm from "../components/ErrorMessageForm";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import TransactionService from "../services/TransactionService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountService from "../services/AccountService";

const ValidationSchema = Yup.object().shape({
  amount: Yup.string().required("O valor da transação é obrigatório!"),
  targetAccount: Yup.number(),
});

export const NewTransaction = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactionType, setTransactionType] = useState(
    "deposit" || "transfer"
  );
  const ref = useRef();
  const transactionComponent = useRef();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    AccountService.findAll().then((response) => {
      setAccounts(response.data);
    });
  }, []);

  const checkType = (e) => {
    if (e.target.value === "transfer") {
      transactionComponent.current.style.display = "block";
      setTransactionType("transfer");
    } else {
      transactionComponent.current.style.display = "none";
      setTransactionType("deposit");
    }
  };

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
          Nova transação
        </h1>
      </div>
      <Formik
        innerRef={ref}
        initialValues={{
          amount: 0.0,
          transactionType: undefined,
          accountID: params.id,
          targetAccount: 0,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          let requestBody = {
            amount: parseFloat(values.amount.replace(",", ".")),
            transactionType: transactionType,
            idAccount: params.id,
            idAccountTarget: values.targetAccount,
          };
          console.log(requestBody);
          TransactionService.addTransaction(requestBody, transactionType).then(
            (response) => {
              if (response.status === 201) {
                toast.success("Transação efetuada com sucesso!", {
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
              toast.warning(err.response.data);
            }
          );
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-bgQuaternary w-2/5 min-h-[60h] rounded-3xl shadow-lg text-white mt-5 p-6 min-w-[250px]">
            <h3 className="font-semibold">Valor da transação (reais)</h3>
            <CurrencyInput
              className="w-full
              px-3
              py-1.5
              text-gray-700
              border border-solid border-bgTertiary
              rounded-xl
              focus:outline-none
              bg-bgInput"
              prefix="R$ "
              allowNegativeValue={false}
              decimalSeparator={","}
              groupSeparator={"."}
              name="amount"
              placeholder="Por favor insira um valor"
              defaultValue={500}
              decimalsLimit={2}
              value={ref.current?.values?.amount}
              onValueChange={(value) => {
                ref.current.setFieldValue("amount", value);
              }}
            />

            <div className="w-full h-14 py-2">
              {errors.amount && touched.amount ? (
                <ErrorMessageForm error={errors.amount} />
              ) : null}
            </div>
            <h3 className="font-semibold">Tipo de transação</h3>
            <Field
              name="transactionType"
              onChange={(e) => checkType(e)}
              className="w-full
            px-3
            py-1.5
            text-gray-700
            border border-solid border-bgTertiary
            rounded-xl
            focus:outline-none
            bg-bgInput"
              as="select"
            >
              <option value="deposit">Depósito</option>
              <option value="transfer">Transferência</option>
            </Field>

            <div className="hidden" ref={transactionComponent}>
              <h3 className="font-semibold">Conta de destino</h3>
              <Field
                name="targetAccount"
                className="w-full
            px-3
            py-1.5
            text-gray-700
            border border-solid border-bgTertiary
            rounded-xl
            focus:outline-none
            bg-bgInput"
                as="select"
              >
                <option value="0">Selecione a conta de destino</option>
                {accounts.map((account, index) => (
                  <option key={index} value={account.id || ""}>
                    {account.name || ""}
                  </option>
                ))}
              </Field>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 p-2 text-center mt-32"
              >
                <p className="text-center font-bold">Concluir transação</p>
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

export default NewTransaction;

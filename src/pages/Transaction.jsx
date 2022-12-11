import { useNavigate, useParams } from "react-router-dom";
import CardCliente from "../components/CardCliente";
import FormInputRead from "../components/FormInputRead";
import { useEffect, useState } from "react";
import TransactionService from "../services/TransactionService";

const Transaction = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    TransactionService.findTransactionById(params.id).then((response) =>
      setTransaction(response.data)
    );
  }, []);

  const transactionValue = transaction?.amount.toFixed(2).replace(".", ",");

  return (
    <div className="h-full">
      <div className="flex flex-col items-center p-4">
        <h1 className="font-bold text-white text-2xl">
          Detalhes da transação #{params.id}
        </h1>
        <div className="bg-bgQuaternary w-2/5 min-h-[70vh] rounded-3xl shadow-lg text-white mt-5 p-6 min-w-[250px]">
          <div className="mb-3">
            <FormInputRead title="Valor" value={"R$ " + transactionValue} />
            <FormInputRead
              title="Tipo de transação"
              value={
                transaction?.transactionType == "deposit"
                  ? "Depósito"
                  : "Transferência"
              }
            />
          </div>
          <div className="w-full flex justify-center mt-10">
            <CardCliente cliente={transaction?.account} />
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 p-2 text-center"
              onClick={() => navigate("/")}
            >
              <p className="font-bold text-center">Voltar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

import { useNavigate, useParams } from "react-router-dom";
import FormInputRead from "../components/FormInputRead";
import { useEffect, useState } from "react";
import AccountService from "../services/AccountService";
import TransactionService from "../services/TransactionService";
import TransactionCard from "../components/TransactionCard";

const Account = () => {
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([""]);
  useEffect(() => {
    AccountService.findAccountById(params.id).then((response) =>
      setAccount(response.data)
    );
    TransactionService.findAllByAccountId(params.id).then((response) =>
      setTransactions(response.data)
    );
  }, []);

  let navigate = useNavigate();
  const params = useParams();

  return (
    <div className="h-full">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-white text-2xl">
          Detalhes da conta #{params.id}
        </h1>
        <div className="bg-bgQuaternary w-2/5 min-h-[70vh] rounded-3xl shadow-lg text-white mt-5 p-6">
          <div className="flex items-center justify-center">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Imagem cliente"
              className="w-36 h-36 rounded-full mx-auto mt-5"
            />
          </div>
          <div className="mb-3">
            <FormInputRead title="Nome do proprietário" value={account?.name} />
            <FormInputRead
              title="CPF"
              value={account?.cpf.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
              )}
            />
          </div>
          <div className="w-full flex mt-10 flex-col items-center">
            <div className="bg-success w-2/5 flex rounded-3xl shadow-md flex-col p-3 m-3">
              <h3 className="font-bold text-center text-xl">
                R$ {account?.balance.toFixed(2).replace(".", ",")}{" "}
              </h3>
              <p className="text-center">Saldo da conta</p>
            </div>
            <div className="bg-bgCard w-3/4 flex rounded-3xl p-4 flex-col">
              <h3 className="text-center font-bold">Transações recentes</h3>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <TransactionCard transaction={transaction} key={index} />
                ))
              ) : (
                <p>Essa conta ainda não possui nenhuma transação</p>
              )}

              <button
                className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-3/4 p-2 text-center mt-10 mx-auto"
                onClick={() => navigate("/new-transaction/" + params.id)}
              >
                <p className="font-bold text-center">Adicionar transação</p>
              </button>
            </div>
            <button
              className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 p-2 text-center mt-10"
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

export default Account;

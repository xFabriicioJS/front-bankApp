import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TransactionService from "../services/TransactionService";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    TransactionService.findAll().then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const columns = ["ID", "Tipo", "Valor", "Conta"];
  let navigate = useNavigate();

  return(
    transactions.length > 0
    ? (
        <table className="w-3/4 shadow-md rounded-2xl bg-bgPrimary text-white mx-auto mt-8">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="p-4 text-center font-bold">
                  {column}
                </th>
              ))}
              <th className="p-4 text-center font-bold">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bgTertiary">
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="transition duration-300 ease-in-out hover:bg-bgTertiary  rounded-2xl"
              >
                <td className="p-4 text-center">{transaction.id}</td>
                <td className="p-4 text-center">
                  {transaction.transactionType == "deposit" ? (
                    <p className="text-success font-bold">Depósito</p>
                  ) : (
                    <p className="text-success font-bold">Transferência</p>
                  )}
                </td>
                <td className="p-4 text-center">
                  R$ {transaction.amount?.toFixed(2).replace(".", ",")}{" "}
                </td>
                <td className="p-4 text-center">{transaction.idAccount}</td>
                <td className="p-4 text-center">
                  <button
                    className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28 mx-5"
                    onClick={() => {
                      navigate(`/transactions/${transaction.id}`);
                    }}
                  >
                    <p className="font-bold">Informações</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      :
      <div className="flex items-center  p-20 flex-col">
        <h1 className="text-2xl">Nenhuma transação foi criada ainda.</h1>
        <p className="text-sm">Para criar sua primeira transação, acesse a aba "Contas", em seguida clique na conta que deseja efetuar uma transação.</p>
      </div>
    )
  
};

export default TransactionsTable;

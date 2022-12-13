import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountService from "../services/AccountService";

const AccountsTable = () => {
  const [accounts, setAccounts] = useState([]);
  const columns = ["ID", "Nome", "CPF"];
  useEffect(() => {
    AccountService.findAll().then((response) => {
      setAccounts(response.data);
    });
  }, []);

  const navigate = useNavigate();
  return accounts.length > 0 ? (
    <table className="w-3/4 shaEdow-md rounded-2xl bg-bgPrimary text-white mx-auto mt-8">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="p-4 text-center font-bold">
              {column}
            </th>
          ))}
          <th>
            <button
              className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28"
              onClick={() => navigate("/new-account/")}
            >
              <p className="font-bold">Novo</p>
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-bgTertiary">
        {accounts?.map((account, index) => (
          <tr
            key={index}
            className="transition duration-300 ease-in-out hover:bg-bgTertiary rounded-2xl last:rounded-2xl"
          >
            <td className="p-4 text-center">{account.id}</td>
            <td className="p-4 text-center">
              <p className="font-bold">{account.name}</p>
            </td>
            <td className="p-4 text-center">
              {account.cpf.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
              )}
            </td>
            <td className="p-4 text-center">
              <button
                className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28 mx-5"
                onClick={() => navigate(`/accounts/${account.id}`)}
              >
                <p className="font-bold">Informações</p>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="flex items-center  p-20 flex-col">
      <h1 className="text-2xl text-white">Nenhuma conta foi criada ainda.</h1>
      <button
        className="bg-success rounded-2xl mt-4 text-white py-2 transition duration-500 hover:scale-110 w-36"
        onClick={() => navigate("/new-account/")}
      >
        <p className="font-bold">Criar nova conta</p>
      </button>
    </div>
  );
};

export default AccountsTable;

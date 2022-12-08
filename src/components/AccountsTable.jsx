const AccountsTable = ({ accounts, columns }) => {
  return (
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
        {accounts.map((account, index) => (
          <tr
            key={index}
            className="transition duration-300 ease-in-out hover:bg-bgTertiary cursor-pointer rounded-2xl"
          >
            <td className="p-4 text-center">{account.id}</td>
            <td className="p-4 text-center">{account.nome}</td>
            <td className="p-4 text-center">{account.cpf}</td>
            <td className="p-4 text-center">
              <button className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28 mx-5">
                <p className="font-bold">Informações</p>
              </button>
              <button className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28">
                <p className="font-bold">Atualizar</p>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountsTable;

const TransactionsTable = ({ transactions, columns }) => {
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
        {transactions.map((transaction, index) => (
          <tr
            key={index}
            className="transition duration-300 ease-in-out hover:bg-bgTertiary cursor-pointer rounded-2xl"
          >
            <td className="p-4 text-center">{transaction.id}</td>
            <td className="p-4 text-center">{transaction.transactionType}</td>
            <td className="p-4 text-center">{transaction.amount}</td>
            <td className="p-4 text-center">{transaction.accountId}</td>
            <td className="p-4 text-center">
              <button className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-28 mx-5">
                <p className="font-bold">Informações da transação</p>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;

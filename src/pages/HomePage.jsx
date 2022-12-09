// import AccountsTable from "../components/AccountsTable";
// import dummyData from "../dummy_data";
import TransactionsTable from "../components/TransactionsTable";
import dummyDataTransactions from "../../dummy_dataTransactions";
// const columns = ["ID", "Nome", "CPF"];
const columns = ["ID", "Tipo", "Valor", "Conta"];
const HomePage = () => {
  return (
    <>
      {/* <AccountsTable accounts={dummyData} columns={columns} /> */}
      <TransactionsTable
        transactions={dummyDataTransactions}
        columns={columns}
      />
    </>
  );
};

export default HomePage;

import AccountsTable from "../components/AccountsTable";
import TransactionsTable from "../components/TransactionsTable";
import { useContext } from "react";
import { newContext } from "../context";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const { state } = useContext(newContext);
  return (
    <>
      <NavBar />
      {state === "accounts" ? <AccountsTable /> : <TransactionsTable />}
    </>
  );
};

export default HomePage;

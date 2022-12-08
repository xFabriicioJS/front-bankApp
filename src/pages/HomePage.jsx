import NavBar from "../components/NavBar";
import AccountsTable from "../components/AccountsTable";
import dummyData from "../dummy_data";

const columns = ["ID", "Nome", "CPF"];

const HomePage = () => {
  return (
    <div className="bg-bgSecondary h-screen">
      <NavBar />
      <AccountsTable accounts={dummyData} columns={columns} />
    </div>
  );
};

export default HomePage;

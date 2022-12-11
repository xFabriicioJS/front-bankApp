import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
import Transaction from "./pages/Transaction";
import NewAccount from "./pages/NewAccount";
import NewTransaction from "./pages/NewTransaction";

const App = () => {
  return (
    <div className="bg-bgSecondary min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/accounts/:id" element={<Account />} />
        <Route path="/new-account" element={<NewAccount />} />
        <Route path="/new-transaction/:id" element={<NewTransaction />} />
      </Routes>
    </div>
  );
};

export default App;

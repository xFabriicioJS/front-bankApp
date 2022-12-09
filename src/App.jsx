import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Transaction from "./pages/Transaction";
const App = () => {
  return (
    <div className="bg-bgSecondary h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions/:id" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default App;

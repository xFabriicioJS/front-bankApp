import { FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TransactionCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/transactions/" + props.transaction?.id)}
      className="bg-bgInput rounded-2xl shadow-xl w-full h-15 flex m-1 items-center transition duration-500 hover:bg-bermuda cursor-pointer"
    >
      <div className="p-5">
        <FaMoneyCheckAlt color="white" fontSize={25} />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-bold text-lg">
          R$ {props.transaction?.amount?.toFixed(2).replace(".", ",")}{" "}
        </p>
        <p className="text-white text-md">
          {props.transaction.transactionType == "deposit"
            ? "Depósito"
            : "Transferência"}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;

import { useNavigate, useParams } from "react-router-dom";
import CardCliente from "../components/CardCliente";
import FormInputRead from "../components/FormInputRead";

const Transaction = () => {
  let navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-white text-2xl">
        Detalhes da transação #{params.id}
      </h1>
      <div className="bg-bgQuaternary w-2/5 min-h-[70vh] rounded-3xl shadow-lg text-white mt-5 p-6">
        <div className="mb-3">
          <FormInputRead title="Valor" value="100.0" />
          <FormInputRead title="Tipo de transação" value="Depósito" />
        </div>
        <div className="w-full flex justify-center mt-10">
          <CardCliente />
        </div>
        <div className="w-full flex justify-center mt-10">
          <button
            className="bg-success rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 p-2 text-center"
            onClick={() => navigate("/")}
          >
            <p className="font-bold text-center">Voltar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

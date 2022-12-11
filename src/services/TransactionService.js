import axios from "axios";
const URL_API = import.meta.env.VITE_URL_API + "transactions";

//Requisiçao para adicionar transação
const addTransaction = async (transaction, transactionType) => {
  return await axios.post(URL_API + "/" + transactionType, transaction);
};

//Requisição para listar todas as transações
const findAll = async () => {
  return await axios.get(URL_API);
};

//Requisição para listar uma transação
const findTransactionById = async (id) => {
  return await axios.get(URL_API + "/" + id);
};

const findAllByAccountId = async (id) => {
  return await axios.get(URL_API + "/account/" + id);
};

const TransactionService = {
  findAllByAccountId,
  findTransactionById,
  addTransaction,
  findAll,
};

export default TransactionService;

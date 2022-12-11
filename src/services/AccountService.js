import axios from "axios";
const URL_API = import.meta.env.VITE_URL_API + "accounts";

//Requisiçao para adicionar conta
const addAccount = async (account) => {
  return await axios.post(URL_API, account);
};

//Requisição para listar todas as contas
const findAll = async () => {
  return await axios.get(URL_API);
};

//Requisição para atualizar conta
const updateAccount = async (id, account) => {
  return await axios.put(URL_API + "/" + id, account);
};

const findAccountById = async (id) => {
  return await axios.get(URL_API + "/" + id);
};

const AccountService = {
  addAccount,
  findAll,
  updateAccount,
  findAccountById,
};

export default AccountService;

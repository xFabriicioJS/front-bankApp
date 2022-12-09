import FormInputRead from "./FormInputRead";

const CardCliente = () => {
  return (
    <div className="bg-bgCard w-3/4 h-2/5 flex rounded-3xl p-4">
      <div className="mr-10">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Imagem cliente"
          className="w-50 h-50 rounded-full mx-auto mt-5"
        />
      </div>
      <div>
        <FormInputRead
          title="Proprietário da conta"
          value="Fabricio Monteiro"
        />
        <FormInputRead title="CPF do proprietário" value="123.679.198-89" />
      </div>
    </div>
  );
};

export default CardCliente;

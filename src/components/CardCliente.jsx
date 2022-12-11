import FormInputRead from "./FormInputRead";

const CardCliente = (props) => {
  return (
    <div className="bg-bgCard w-3/4 h-2/5 flex rounded-3xl p-4">
      <div className="hidden mr-10 md:block">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Imagem cliente"
          className="w-50 h-50 rounded-full mx-auto mt-5"
        />
      </div>
      <div>
        <FormInputRead
          title="Proprietário da conta"
          value={props.cliente?.name || ""}
        />
        <FormInputRead
          title="CPF do proprietário"
          value={
            props.cliente?.cpf.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            ) || ""
          }
        />
      </div>
    </div>
  );
};

export default CardCliente;

import { BsLinkedin, BsGithub } from "react-icons/bs";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  return (
    <div className="w-full h-14 rounded-b-2xl bg-bgPrimary flex items-center shadow-xl justify-between">
      <div className=" w-64 flex p-4 gap-5">
        <BsLinkedin
          fontSize={25}
          className="text-textSecondary transition duration-300 ease-in-out hover:text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/fabricio-monteiro-91b8041ab"
            )
          }
        />
        <BsGithub
          className="text-textSecondary transition duration-300 ease-in-out hover:text-white cursor-pointer"
          onClick={() => window.open("https://github.com/xFabriicioJS")}
          fontSize={25}
        />
      </div>
      <div className="w-32">
        <h2 className=" text-white text-xl font-bold ml-4">appBank.</h2>
      </div>
      <div className="w-64 flex p-4 gap-5">
        <ButtonNav title="Transações" />
        <ButtonNav title="Contas" />
      </div>
    </div>
  );
};

export default NavBar;

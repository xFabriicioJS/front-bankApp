import { BsLinkedin, BsGithub } from "react-icons/bs";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  return (
    <div className="w-full h-14 rounded-b-2xl bg-bgPrimary flex items-center shadow-xl justify-between">
      <div className="flex p-4 gap-5">
        <BsLinkedin color="white" fontSize={25} />
        <BsGithub color="white" fontSize={25} />
      </div>
      <h2 className=" text-white text-xl font-bold">appBank.</h2>
      <div className="flex p-4 gap-5">
        <ButtonNav title="Transações" />
        <ButtonNav title="Contas" />
      </div>
    </div>
  );
};

export default NavBar;

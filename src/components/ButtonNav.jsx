import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const ButtonNav = (props) => {
  return (
    <button className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-32 focus:outline-none focus:ring flex p-2 gap-1 items-center">
      {props.title === "Transações" ? (
        <FaMoneyCheckAlt color="white" fontSize={20} />
      ) : (
        <MdAccountBalance color="white" fontSize={20} />
      )}
      <p className="font-bold">{props.title}</p>
    </button>
  );
};

export default ButtonNav;

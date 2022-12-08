import React from "react";

const ButtonNav = (props) => {
  return (
    <button className="bg-bermuda rounded-2xl text-white py-2 transition duration-500 hover:scale-110 w-24 focus:outline-none focus:ring">
      <p className="font-bold">{props.title}</p>
    </button>
  );
};

export default ButtonNav;

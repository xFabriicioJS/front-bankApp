import React, { useRef } from "react";

const FormInputRead = (props) => {
  const inputRef = useRef();
  return (
    <>
      <label className="form-label inline-block mb-2 text-gray-700 ml-2 mt-4">
        {props.title}
      </label>
      <input
        readOnly
        type="text"
        className="
        form-control
        w-full
        px-3
        py-1.5
        text-gray-700
        border border-solid border-bgTertiary
        rounded-xl
        focus:outline-none
        bg-bgInput
        cursor-not-allowed
      "
        ref={inputRef}
        value={props.value || ""}
      />
    </>
  );
};

export default FormInputRead;

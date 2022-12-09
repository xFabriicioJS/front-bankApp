const FormInputRead = (props) => {
  return (
    <>
      <label className="form-label inline-block mb-2 text-gray-700 ml-2 mt-4">
        {props.title}
      </label>
      <input
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
        value={props.value}
        aria-label="readonly input example"
      />
    </>
  );
};

export default FormInputRead;

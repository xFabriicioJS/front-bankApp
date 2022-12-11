import { IoMdAlert } from "react-icons/io";

const ErrorMessageForm = ({ error }) => {
  return (
    <div className="bg-danger w-full lg:w-2/4 rounded-lg p-1 flex items-center ">
      <IoMdAlert className="text-white text-2xl mr-1" />
      <p className="font-semibold text-xs">{error}</p>
    </div>
  );
};

export default ErrorMessageForm;

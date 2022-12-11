import { createContext, useState } from "react";

export const newContext = createContext();

export const NewProvider = ({ children }) => {
  const [state, setState] = useState("accounts");

  const val = {
    state,
    setState,
  };
  return <newContext.Provider value={val}>{children}</newContext.Provider>;
};

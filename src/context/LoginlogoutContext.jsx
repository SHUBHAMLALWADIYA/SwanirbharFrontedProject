import { createContext, useState } from "react";

export const LoginlogoutContext = createContext();

const LoginlogoutContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <LoginlogoutContext.Provider value={{ toggle, setToggle }}>
        {children}
      </LoginlogoutContext.Provider>
    </>
  );
};
export default LoginlogoutContextProvider;
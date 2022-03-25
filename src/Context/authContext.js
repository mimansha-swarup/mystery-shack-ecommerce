import { createContext, useContext } from "react";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({children}) =>{
  
  return( <authContext.Provider>{children}</authContext.Provider>)
}

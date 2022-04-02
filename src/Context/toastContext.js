import { createContext, useContext, useState } from "react";

const toastContext = createContext()

export const useToast= () =>useContext(toastContext)


export const ToastProvider= ({children}) =>{
  const [toastData,setToastData] = useState([])
  
  return <toastContext.Provider value={{toastData,setToastData}} >
    {children}
  </toastContext.Provider>
}
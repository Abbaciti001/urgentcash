  "use client"
import {  createContext, useState } from "react"

const AppContext = createContext();

const AppProvider =({children}) => {
 const [loanDocId, setLoanDocTd] = useState(null)
   return (
    <AppContext.Provider value= {{loanDocId , setLoanDocTd}}>
      {children}
    </AppContext.Provider>
   );
};
export {AppContext, AppProvider}
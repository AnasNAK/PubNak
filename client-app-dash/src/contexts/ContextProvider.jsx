import { createContext, useState, useContext } from "react";


const StateContext =createContext({

   currentUser:{},
   userToken:null,
   setCurrentUser:() =>{ },
   setUserToken:()=> {}
});

export const ContextProvider = ({children})=>{
   const[currentUser,setCurrentUser] = useState({})
   const   [userToken,setUserToken]= useState('1234')
    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken

        }}>
{children}
        </StateContext.Provider>
    )
}

export const userStateContext = () => useContext(StateContext);

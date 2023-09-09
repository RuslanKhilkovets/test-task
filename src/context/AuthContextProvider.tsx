import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [isAuth, setIsAuth] = useState(false)
    const changeIsAuth = (): void => {
        setIsAuth(!isAuth)
    }
    const authContextValue = {
        isAuth, changeIsAuth
      };
    return (
        <AuthContext.Provider value={authContextValue}> 
            {children}
        </AuthContext.Provider>
    );
}
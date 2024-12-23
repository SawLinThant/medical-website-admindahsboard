"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { getRoleFromToken } from "../utils";

interface AccountContext {
  userId:string
  setUserId: (id:string) => void
  isLogin: boolean;
  role: string
  setRole:(role:string) => void
  setIsLogin:(isLogin:boolean) => void
}

const AccountContext = createContext<AccountContext | null>(null);

interface AccountProviderProps {
  children?: React.ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [isLogin,setIsLogin] = useState<boolean>(false);
  const [role,setRole] = useState<string>("");
  const [userId,setUserId] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = getRoleFromToken(token?token:"");
    console.log(user)
    if(user){
      setRole(user?user.role:"")
      setUserId(user?user.id:"")
    }
    setIsLogin(!!token);
  }, []);

  return (
    <AccountContext.Provider
      value={{
        isLogin: isLogin,
        role: role,
        setRole: setRole,
        setIsLogin: setIsLogin,
        userId: userId,
        setUserId: setUserId
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
    const context = useContext(AccountContext);
    if(context === null){
        throw new Error("useAccount must be used within a AccountProvider");
    }
    return context
}

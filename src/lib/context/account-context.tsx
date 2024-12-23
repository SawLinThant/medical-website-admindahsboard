"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

interface AccountContext {
  isLogin: boolean;
}

const AccountContext = createContext<AccountContext | null>(null);

interface AccountProviderProps {
  children?: React.ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [isLogin,setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return (
    <AccountContext.Provider
      value={{
        isLogin: isLogin,
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

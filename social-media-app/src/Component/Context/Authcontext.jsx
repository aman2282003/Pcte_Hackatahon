import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(true);
  const [token, settoken] = useState("");

  console.log(isAuth);
  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, token, settoken }}>
      {children}
    </AuthContext.Provider>
  );
}

import React, { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

export const UserContext = createContext({ user: null }); //create context

//now create actual component which holds context
const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  });

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;

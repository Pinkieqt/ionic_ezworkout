import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

export const UserContext = createContext(null); //create context

//now create actual component which holds context
const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setCurrentUser(authUser);
    });
    console.log(currentUser);
  }, [currentUser]);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export default UserProvider;

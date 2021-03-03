import React, { createContext } from "react";

const UsersContext = createContext<any>({});

const DataContext: React.FC = ({ children }) => {
  return <UsersContext.Provider value={"dsa"}>{children}</UsersContext.Provider>;
};

export { DataContext, UsersContext };

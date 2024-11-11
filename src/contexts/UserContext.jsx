import { createContext, useContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "kushal",
    age: 21,
  });

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { useUser, UserProvider };

import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const val = { currentUser, setCurrentUser };

  return <UserContext.Provider value={val}>{children}</UserContext.Provider>;
};

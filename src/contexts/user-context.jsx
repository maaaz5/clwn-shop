import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onUserStateChanged,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const val = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onUserStateChanged(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={val}>{children}</UserContext.Provider>;
};

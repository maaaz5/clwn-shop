import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onUserStateChanged,
} from "../utils/firebase/firebase.utils";

const constantes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case constantes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unhandled type ${type} at user Reducer`);
  }
};

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: constantes.SET_CURRENT_USER, payload: user });
  };
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

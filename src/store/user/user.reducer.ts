import { AnyAction } from "redux";
import { setCurrentUser } from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setCurrentUser.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  return state;
};

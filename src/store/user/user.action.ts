import { USER_ACTION_TYPES } from "./user.types";
import {
  createAction,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { UserData } from "../../utils/firebase/firebase.utils";
import { withMatcher } from "../../utils/reducer/reducer.utils";

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

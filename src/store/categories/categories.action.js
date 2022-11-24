import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoryMap = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
  payload: categories,
});

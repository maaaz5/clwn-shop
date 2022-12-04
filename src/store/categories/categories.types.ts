export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_START = "SET_CATEGORIES_START",
  SET_CATEGORIES_SUCCESS = "SET_CATEGORIES_SUCCESS",
  SET_CATEGORIES_FAILED = "SET_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

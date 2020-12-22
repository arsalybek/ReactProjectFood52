import { ShopModel } from "../models/Shop";
import { AddProduct, GET_FOODCATEGORYLIST, RemoveProduct } from "./actionTypes";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./constants";

export const getFoodCategoryList = () => {
  return {
    type: GET_FOODCATEGORYLIST,
  };
};

export function addProduct(recipe: ShopModel): AddProduct {
  return {
    type: ADD_PRODUCT,
    payload: recipe
  };
}

export function removeProduct(recipe: ShopModel): RemoveProduct {
  return {
    type: REMOVE_PRODUCT,
    payload: recipe
  };
}

export type AppAction = AddProduct | RemoveProduct;
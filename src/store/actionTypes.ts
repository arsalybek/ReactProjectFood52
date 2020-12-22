import { RecipeModel } from "../models/Recipe";
import { RecipeCategoryModel } from "../models/RecipeCategory";
import { ShopModel } from "../models/Shop";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./constants";

export const GET_FOODCATEGORYLIST = "GET_FOODCATEGORYLIST";

export interface RecipeCartLine {
	product: ShopModel;
  }

export interface AppState {
	allRecipes: ShopModel[];
	likedRecipes: RecipeCartLine[];
	foodCategories: RecipeCategoryModel[];
	lang: string;
  }

export interface AddProduct {
	type: ADD_PRODUCT;
	payload: ShopModel;
  }
  
  export interface RemoveProduct {
	type: REMOVE_PRODUCT;
	payload: ShopModel;
  }
  
  export type AppAction = AddProduct | RemoveProduct;
import { RecipeCategoryModel } from "../models/RecipeCategory";

export const GET_FOODCATEGORYLIST = "GET_FOODCATEGORYLIST";

export type getCategoryAction = {
	type: string,
    payload: RecipeCategoryModel[];
}

export type State = {
	foodCategories: RecipeCategoryModel[];
}
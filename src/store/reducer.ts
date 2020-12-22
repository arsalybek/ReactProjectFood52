import { Reducer } from "redux";
import { RecipeModel } from "../models/Recipe";
import { RecipeCategoryModel } from "../models/RecipeCategory";
import { GET_FOODCATEGORYLIST, AppAction, AppState } from "./actionTypes";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./constants";

const categoryList: RecipeCategoryModel[] = [
  {
    id: 1,
    title: "pasta",
    image:
      "https://images.food52.com/1Gnc46le0WAE2fBgW4m-_hk5CYs=/322x215/b0ea8eb2-0a3c-4d08-a1a0-80586633d75e--2018-0914_miso-mushroom-pasta_3x2_jenny-huang_32871.jpg",
  },
  {
    id: 2,
    title: "salad",
    image:
      "https://images.food52.com/LF_83abpAXFJCjrw9hsmpryzpdc=/322x215/f26dca01-b2d1-473b-b8c0-4b797be69e5c--051810F_553.JPG",
  },
  {
    id: 3,
    title: "chicken",
    image:
      "https://images.food52.com/WGlZTMMoa4czpcFsw6OXQvYP5jQ=/322x215/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg",
  },
];

export default function rootReducer(state: AppState, action: AppAction): AppState {
  const { likedRecipes } = state;
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT: {
      const newLikedRecipes = [...likedRecipes];

      let line = newLikedRecipes.find(line => line.product === payload);
      if (!line) {
        line = {
          product: payload
        };
        newLikedRecipes.push(line);
      }

      return {
        ...state,
        likedRecipes: newLikedRecipes,
      };
    }
    case REMOVE_PRODUCT: {
      let newLikedRecipes = [...likedRecipes];

      let line = newLikedRecipes.find(line => line.product === payload);
      if (line) {
        newLikedRecipes = newLikedRecipes.filter((line) => line.product !== payload);
      }
      return {
        ...state,
        likedRecipes: newLikedRecipes,
      };
    }
    default:
      return state;
  }
}

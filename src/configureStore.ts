import { Store, createStore, applyMiddleware} from "redux";
import { AppState,} from "./store/actionTypes";
import { History } from "history";
import rootReducer from "./store/reducer";
import { recipeList } from "./models/Recipe";
import { recipeCategoryList } from "./models/RecipeCategory";

// export default function configureStore(): Store<AppState> {
  // const store = createStore(
  //   rootReducer,
  //   {
  //     allRecipes: recipeList,
  //     likedRecipes: [],
  //     foodCategories: recipeCategoryList
  //   },
  // );

  // return store;
// }



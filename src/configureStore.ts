import { Store, createStore } from "redux";
import { State } from "./store/actionTypes";
import { History } from "history";
import { reducer } from "./store/reducer";

export default function configureStore(history: History, initialState: State): Store<State> {
  const store = createStore(reducer, initialState);

  return store;
}

import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { phonebookReducer } from "./reducer";

const enhancer = devToolsEnhancer();

export const store = createStore(phonebookReducer, enhancer);
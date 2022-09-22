import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistStore } from 'redux-persist';
import { persistedReducer } from "./reducer";

const enhancer = devToolsEnhancer();

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
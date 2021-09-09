import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers";
import apiFilterMethods from "../middleWare";
export default function reduxSotre() {
  return configureStore({
    reducer: { entities: rootReducers() },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiFilterMethods),
  });
}

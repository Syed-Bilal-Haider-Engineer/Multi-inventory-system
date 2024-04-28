import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default Store;
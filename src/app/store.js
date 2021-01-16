import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";

import counterReducer from "../features/counter/counterSlice";
import playerReducer from "../features/player/playerSlice";

export default configureStore({
  reducer: persistReducer(
    {
      key: "store",
      storage,
    },
    combineReducers({
      counter: counterReducer,
      player: playerReducer,
    })
  ),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

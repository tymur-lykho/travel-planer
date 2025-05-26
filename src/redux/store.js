import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import markersReducer from "./markersSlice";
import routesReducer from "./routesSlice";

const persistMarkersConfig = {
  key: "markers",
  storage,
};

const persistRoutesConfig = {
  key: "routes",
  storage,
};

const persistedMarkersReducer = persistReducer(
  persistMarkersConfig,
  markersReducer
);

const persistedRoutesReducer = persistReducer(
  persistRoutesConfig,
  routesReducer
);

export const store = configureStore({
  reducer: {
    markers: persistedMarkersReducer,
    routes: persistedRoutesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

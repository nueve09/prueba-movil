import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user/userSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
    persistReducer
  } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { taskSlice } from "./slices/task/taskSlice";
import { modalSlice } from "./slices/modal/modalSlice";

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const rootReducer = combineReducers({
    user: userSlice.reducer,
    task: taskSlice.reducer,
    modal: modalSlice.reducer
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  export {store, persistor};

  export type AppStore = typeof store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
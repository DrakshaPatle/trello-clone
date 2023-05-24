import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import rootReducer from './reducer/rootReducers';
import thunk from 'redux-thunk';
const rootPersistConfig = {
  key: 'taskRoot',
  storage,
}
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
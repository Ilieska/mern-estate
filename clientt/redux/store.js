import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const presistedReducer= persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: presistedReducer,
  middleware: (buildGetDefaultMiddleware) => 
  buildGetDefaultMiddleware({
    serializableCheck: false,
  }),
});


export const presistor = persistStore(store);
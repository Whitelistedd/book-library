import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import BooksReducer from './redux';

export const store = configureStore({
  reducer: BooksReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const AppDispatch = () => useDispatch<AppDispatchType>() //


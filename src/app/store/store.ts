import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../modules/imagePosts/searchBar/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

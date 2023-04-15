import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../modules/imagePosts/searchBar/searchSlice';
import { cardlistApi } from '../../modules/imagePosts/CardsList/cardsListAPI';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [cardlistApi.reducerPath]: cardlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardlistApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

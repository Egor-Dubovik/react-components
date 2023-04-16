import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../modules/imagePosts/searchBar/searchSlice';
import userReducer from '../../modules/UserList/usersSlice';
import { cardlistApi } from '../../modules/imagePosts/CardsList/cardsListAPI';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [cardlistApi.reducerPath]: cardlistApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardlistApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

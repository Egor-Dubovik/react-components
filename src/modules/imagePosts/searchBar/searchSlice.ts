import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';

interface ISearchState {
  query: string;
}

const initialState: ISearchState = {
  query: 'something',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const selectQuery = (state: RootState) => state.search.query;
export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';

type Visibility = 'hidden' | 'visible';

export interface ISearchState {
  query: string;
  buttonVisibility: Visibility;
}

const initialState: ISearchState = {
  query: 'something',
  buttonVisibility: 'hidden',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setButtonVisibility: (state, action: PayloadAction<Visibility>) => {
      state.buttonVisibility = action.payload;
    },
  },
});

export const selectQuery = (state: RootState) => state.search.query;
export const selectVisibility = (state: RootState) => state.search.buttonVisibility;
export const { setQuery, setButtonVisibility } = searchSlice.actions;
export default searchSlice.reducer;

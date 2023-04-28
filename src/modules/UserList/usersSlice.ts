import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';

export interface UserData {
  name: string;
  birthday: Date;
  country: string;
  agreement: boolean;
  gender: 'male' | 'female';
  avatar: string;
}

const initialState = {
  data: [] as UserData[],
};

export const usersSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setUser } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users.data;
export default usersSlice.reducer;

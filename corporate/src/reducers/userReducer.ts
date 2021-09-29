import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact, RootState } from '../store/type';

const initialState: Contact = {
  login: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }: PayloadAction<Contact>) => {
      return { ...state, ...payload, login: true };
    },
  },
});

export const { getCurrentUser } = userSlice.actions;

export const getUser = (state: RootState) => state.userReducer.user;

export default userSlice.reducer;

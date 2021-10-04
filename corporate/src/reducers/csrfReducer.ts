import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CSRF } from '../store/type';

const initialState: CSRF = null as CSRF;

export const csrfSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCsrf: (_state, { payload }: PayloadAction<CSRF>) => {
      return payload as string;
    },
  },
});

export const { setCsrf } = csrfSlice.actions;

export default csrfSlice.reducer;

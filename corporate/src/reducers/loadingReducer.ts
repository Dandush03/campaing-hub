import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/type';

export type Loading = number

const initialState: Loading = 0;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => state += 1,
    removeLoadingState: (state) => state <= 0 ? state = 0 : state -= 1,
    resetLoading: (state) => state = 0,
  },
});

export const {
  startLoading, removeLoadingState, resetLoading,
} = loadingSlice.actions;

export const getI18n = (state: RootState) => state.i18nReducer.i18n;

export default loadingSlice.reducer;

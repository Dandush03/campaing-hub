import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/type';

interface menu {
  campaigns: string
}

export interface I18n {
  menu?: menu,
}
const initialState: I18n = {};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    addTranslation: (state, { payload }: PayloadAction<I18n>) => {
      return { ...state, ...payload };
    },
  },
});

export const { addTranslation } = i18nSlice.actions;

export const getI18n = (state: RootState) => state.i18nReducer.i18n;

export default i18nSlice.reducer;

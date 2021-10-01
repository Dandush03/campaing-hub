import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Campaign } from '../store/type';

const initialState: Campaign[] = [];

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    fetchCampaigns: (state, { payload }: PayloadAction<Campaign[]>) => {
      return [...state, ...payload];
    },
  },
});

export const { fetchCampaigns } = campaignsSlice.actions;

export default campaignsSlice.reducer;

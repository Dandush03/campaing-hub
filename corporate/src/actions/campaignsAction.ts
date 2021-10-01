import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import {
  removeLoadingState, resetLoading, startLoading,
} from '../reducers/loadingReducer';
import { fetchCampaigns } from '../reducers/campaignsReducer';

const getCampaingsList = () => {
  const url = '/api/v1/corporate/campaigns';
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(startLoading());
    axios
        .get(url)
        .then(({ data }) => {
          dispatch(fetchCampaigns(data));
        })
        .then(() => dispatch(removeLoadingState()))
        .catch(({ response: { status } }) => {
          if (status === 401) window.location.href = '/users/sign_in';
          return dispatch(resetLoading());
        });
  };
};

export { getCampaingsList };

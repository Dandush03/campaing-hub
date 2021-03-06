import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import {
  removeLoadingState, resetLoading, startLoading,
} from '../reducers/loadingReducer';
import { getCurrentUser } from '../reducers/userReducer';
import { getCSRF } from './csrfAction';

const getCurrentUserSession = () => {
  const url = '/api/v1/corporate';
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(startLoading());
    axios
        .get(url)
        .then(({ data }) => {
          dispatch(getCurrentUser(data));
        })
        .then(() => dispatch(getCSRF()))
        .then(() => dispatch(removeLoadingState()))
        .catch(({ response }) => {
          if (response && response.status === 401) {
            window.location.href = '/users/sign_in';
          }
          return dispatch(resetLoading());
        });
  };
};

export { getCurrentUserSession };

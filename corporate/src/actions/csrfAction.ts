import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import {
  removeLoadingState, resetLoading, startLoading,
} from '../reducers/loadingReducer';
import { setCsrf } from '../reducers/csrfReducer';

const getCSRF = () => {
  const url = '/api/v1/csrf';
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(startLoading());
    axios
        .get(url)
        .then(({ data }) => {
          dispatch(setCsrf(data));
        })
        .then(() => dispatch(removeLoadingState()))
        .catch(() => {
          // window.location.href = '/users/sign_in';
          return dispatch(resetLoading());
        });
  };
};

export { getCSRF };

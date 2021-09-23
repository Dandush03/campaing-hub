import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import {
  removeLoadingState, resetLoading, startLoading,
} from '../reducers/loadingReducer';
import { addTranslation } from '../reducers/i18nReducer';

const getTranslation = () => {
  const url = '/api/v1/i18n';
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(startLoading());
    axios
        .get(url)
        .then(({ data }) => {
          dispatch(addTranslation(data));
        })
        .then(() => dispatch(removeLoadingState()))
        .catch(() => dispatch(resetLoading()));
  };
};

export { getTranslation };

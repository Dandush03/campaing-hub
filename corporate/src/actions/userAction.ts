import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { startLoading } from '../reducers/loadingReducer';

const getCurrentContact = () => {
  const url = '';
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(startLoading());
    axios
        .get(url)
        .then((response) => {
          // eslint-disable-next-line no-unused-vars
          const { status, data } = response;
          debugger;
        });
  };
};

export { getCurrentContact };

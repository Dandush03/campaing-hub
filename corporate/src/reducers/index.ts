import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import campaignsReducer from './campaignsReducer';
import csrfReducer from './csrfReducer';

export default combineReducers({
  user: userReducer,
  csrf: csrfReducer,
  loading: loadingReducer,
  campaigns: campaignsReducer,
});

export { userReducer, loadingReducer };

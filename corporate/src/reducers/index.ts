import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import campaignsReducer from './campaignsReducer';

export default combineReducers({
  user: userReducer,
  loading: loadingReducer,
  campaigns: campaignsReducer,
});

export { userReducer, loadingReducer };

import { combineReducers } from 'redux';
import i18nReducer from './i18nReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  i18n: i18nReducer,
  loading: loadingReducer,
});

export { i18nReducer, loadingReducer };

import { initialState } from './type';

export default <initialState> {
  user: {
    login: false,
  },
  csrf: null,
  campaigns: [],
  loading: 0,
};

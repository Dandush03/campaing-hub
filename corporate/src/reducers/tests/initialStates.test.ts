import reducers, { userReducer, loadingReducer } from '..';
import campaignsReducer from '../campaignsReducer';

test('return the initial state', () => {
  expect(reducers(undefined, <any>{})).toEqual({
    user: { login: false },
    loading: 0,
    campaigns: [],
  });
});


test('return the user initial state', () => {
  expect(userReducer(undefined, <any>{})).toEqual({
    login: false,
  });
});

test('return the loading initial state', () => {
  expect(loadingReducer(undefined, <any>{})).toEqual(0);
});

test('return the campaigns initial state', () => {
  expect(campaignsReducer(undefined, <any>{})).toEqual([]);
});

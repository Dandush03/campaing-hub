import reducers, { userReducer, loadingReducer } from '..';

test('return the initial state', () => {
  expect(reducers(undefined, <any>{})).toEqual({
    user: { login: false },
    loading: 0,
  });
});


test('return the user initial state', () => {
  expect(userReducer(undefined, <any>{})).toEqual({
    login: false,
  });
});

test('return the i18n initial state', () => {
  expect(loadingReducer(undefined, <any>{})).toEqual(0);
});

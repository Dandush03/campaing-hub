import reducers, { i18nReducer, loadingReducer } from '../../reducers';

test('return the initial state', () => {
  expect(reducers(undefined, <any>{})).toEqual({
    i18n: {},
    loading: 0,
  });
});


test('return the i18n initial state', () => {
  expect(i18nReducer(undefined, <any>{})).toEqual({
  });
});

test('return the i18n initial state', () => {
  expect(loadingReducer(undefined, <any>{})).toEqual(0);
});

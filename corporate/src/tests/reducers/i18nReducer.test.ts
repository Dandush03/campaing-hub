import i18nReducer, { addTranslation } from '../../reducers/i18nReducer';

test('return the initial state', () => {
  expect(i18nReducer(undefined, <any>{})).toEqual({
  });
});

test('return same state when called on empty value', () => {
  const prevState = { menu: { campaigns: 'test' } };
  expect(i18nReducer(prevState, addTranslation)).toEqual({
    menu: {
      campaigns: 'test',
    },
  });
});

test('handle adding new attributes or updating existing once', () => {
  const prevState = { menu: { campaigns: 'test' } };
  const nextStateUpdated = { menu: { campaigns: 'test1' } };
  expect(i18nReducer(prevState, addTranslation(nextStateUpdated))).toEqual({
    menu: {
      campaigns: 'test1',
    },
  });
});

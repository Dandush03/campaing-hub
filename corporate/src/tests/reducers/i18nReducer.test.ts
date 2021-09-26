import i18nReducer, { addTranslation } from '../../reducers/i18nReducer';

test('return the initial state', () => {
  expect(i18nReducer(undefined, <any>{})).toEqual({
  });
});

test('return same state when called on empty value', () => {
  const prevState = { en: { menu: { campaigns: 'test' } } };
  expect(i18nReducer(prevState, addTranslation)).toEqual({
    en: {
      menu: {
        campaigns: 'test',
      },
    },
  });
});

test('handle adding new attributes or updating existing once', () => {
  const prevState = { en: { menu: { campaigns: 'test' } } };
  const nextStateUpdated = { en: { menu: { campaigns: 'test1' } } };
  expect(i18nReducer(prevState, addTranslation(nextStateUpdated))).toEqual({
    en: {
      menu: {
        campaigns: 'test1',
      },
    },
  });
});

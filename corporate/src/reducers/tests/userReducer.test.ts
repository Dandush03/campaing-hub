import userReducer, { getCurrentUser } from '../../reducers/userReducer';

test('return the initial state', () => {
  expect(userReducer(undefined, <any>{})).toEqual({
    login: false,
  });
});

test('handle adding new attributes or updating existing once', () => {
  const prevState = { login: false };
  const nextStateUpdated = { login: true, email: 'test' };
  expect(userReducer(prevState, getCurrentUser(nextStateUpdated))).toEqual({
    login: true,
    email: 'test',
  });
});

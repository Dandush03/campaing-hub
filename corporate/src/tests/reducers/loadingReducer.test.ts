import
loadingReducer, {
  startLoading, removeLoadingState, resetLoading,
} from '../../reducers/loadingReducer';

test('return the initial state', () => {
  expect(loadingReducer(undefined, <any>{})).toEqual(0);
});

test('increment loading attribute', () => {
  const prevState = 0;
  expect(loadingReducer(prevState, startLoading)).toEqual(1);
});

test('decrement loading attribute', () => {
  const prevState = 1;
  expect(loadingReducer(prevState, removeLoadingState)).toEqual(0);
});

test('return 0 when prev state is eq or lower than 0', () => {
  const prevStateNegative = -1;
  const prevStateInitial = 0;
  expect(loadingReducer(prevStateNegative, removeLoadingState)).toEqual(0);
  expect(loadingReducer(prevStateInitial, removeLoadingState)).toEqual(0);
});

test('reset to initial value', () => {
  const prevState = 5;
  expect(loadingReducer(prevState, resetLoading)).toEqual(0);
});

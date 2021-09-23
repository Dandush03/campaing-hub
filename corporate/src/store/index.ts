import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import initState from './initState';

export default () => {
  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  const store = createStore(
      reducers,
      initState,
      composeEnhancers(
          applyMiddleware(
              thunk,
          ),
      ),
  );

  return store;
};

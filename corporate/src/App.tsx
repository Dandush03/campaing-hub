import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTranslation } from './actions/i18nAction';


const App: React.FunctionComponent<{}> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranslation());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

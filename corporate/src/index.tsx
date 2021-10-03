import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import storeConfig from './store';
import Layout from './layout';

import './i18n';
import Campaigns, { MatchProps } from './pages/campaigns';
import Dashboard from './pages/dashboard';
import Leads from './pages/leads';

const store = storeConfig();


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/corporate' exact component={Dashboard} />
              <Route
                path='/corporate/campaigns'
                render={(props: MatchProps) => <Campaigns route={props}/>} />
              <Route path='/corporate/leads' exact component={Leads} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

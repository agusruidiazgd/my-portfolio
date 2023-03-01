import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

const mixpanelKey = process.env.REACT_APP_AMPLITUDE_KEY;

mixpanel.init(mixpanelKey, { debug: true });

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

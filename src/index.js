import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import App from './App.jsx';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StoreProvider>
  ,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

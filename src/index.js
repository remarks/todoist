import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
import configureStore from 'redux/configureStore';
import 'index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

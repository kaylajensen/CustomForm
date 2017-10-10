import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'reset-css';
import reducer from './reducers';
import { getFlight } from './actions/actions';
import App from './app/app';

const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware,
  ));
store.dispatch(getFlight());

const rerenderApp = (AppContainer) => {
  render((
    <Provider store={store} >
      <AppContainer />
    </Provider>
  ), document.querySelector('#app'));
};

rerenderApp(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const app = require('./app/app').default;
    rerenderApp(app);
  });
}

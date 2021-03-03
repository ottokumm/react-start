import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app';
import { configureAppStore } from 'store';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <Component />
  </Provider>
);

const render = (Component) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);

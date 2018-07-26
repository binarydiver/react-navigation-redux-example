import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from '@app/Store';
import RootNavigator from '@app/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootNavigator />
      </Provider>
    );
  }
}
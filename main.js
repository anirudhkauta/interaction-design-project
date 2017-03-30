import Exponent from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './api/configureStore';

class Root extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

// export default setup;
Exponent.registerRootComponent(Root);

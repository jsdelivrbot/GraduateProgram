import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import DrawerNav from './components/DrawerNav';
import {Provider} from 'react-redux';
import store from './store';

YellowBox.ignoreWarnings([
    'Warning: isMounted'
]);

/* Main app component */
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <DrawerNav/>
        </Provider>
    );
  }
}

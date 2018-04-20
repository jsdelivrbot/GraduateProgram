import React, { Component } from 'react';
import { StyleSheet, Text, View, YellowBox, StatusBar } from 'react-native';
import StackNav from './components/StackNav';

YellowBox.ignoreWarnings([
    'Warning: isMounted',
]);

export default class App extends Component {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>

        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>*/

        /*<View>
            <StatusBar
                backgroundColor="#3d4246"
                barStyle="light-content"
            />

        </View>*/

        <StackNav />
    );
  }
}

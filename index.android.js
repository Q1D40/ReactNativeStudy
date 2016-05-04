'use strict';

import React, {
  Component,
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import MainList from './components/MainList'

class ReactNativeStudy extends Component {

  render() {
    return (
      <View style={styles.main}>
      <MainList />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeStudy', () => ReactNativeStudy);

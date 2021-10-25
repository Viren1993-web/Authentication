/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SingInScreen from './src/screens/SingInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SingInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;

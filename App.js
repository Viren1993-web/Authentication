/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SingInScreen from './src/screens/SignInScreen';
import SingUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import Navigation from './src/navigation/index';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
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

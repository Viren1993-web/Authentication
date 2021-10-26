import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const onRegisteonConfirmPressedrPressed = () => {
    console.warn('onConfirmPressed');
  };

  const onResendPress = () => {
    console.warn('onConfirmPressed');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };
  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email </Text>
        <CustomInput
          placeholder="Enter Your Confirmation Code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;

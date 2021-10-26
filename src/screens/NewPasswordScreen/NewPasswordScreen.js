import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password </Text>
        <Text >Username*</Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter Your New Password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
        
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

export default NewPasswordScreen;

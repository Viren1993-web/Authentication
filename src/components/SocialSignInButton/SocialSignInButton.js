import React from 'react';
import {View, Text, Button} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const SocialSignInButton = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };
  const onSignInApple = () => {
    console.warn('onSignInApple');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;

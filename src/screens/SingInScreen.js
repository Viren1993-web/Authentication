import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
const SingInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignInFacebook = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignInGoogle = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignInApple = () => {
    console.warn('onForgotPasswordPressed');
  };

  const onSignUpPress = () => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
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
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 100,
  },
});

export default SingInScreen;

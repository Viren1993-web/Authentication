import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
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
        <SocialSignInButton />
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

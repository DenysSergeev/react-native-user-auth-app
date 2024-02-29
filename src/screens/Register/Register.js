import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { registerUser } from '../../server/server';
import AppTextInput from '../../shared/AppTextInput/AppTextInput';
import SocialLoginButtons from '../../shared/SocialLoginButtons/SocialLoginButtons';
import { validateInputs } from '../../utils/validation/validation';
import registerStyles from './styles';

const Register = ({ navigation }) => {
  const { navigate } = navigation;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (!validateInputs(name, email, password, confirmPassword)) {
        return;
      }

      const newUser = await registerUser(name, email, password);

      navigate('Dashboard', { name: newUser.name });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={registerStyles.container}>
        <View style={registerStyles.logoContainer}>
          <Image
            style={registerStyles.logo}
            resizeMode='contain'
            source={require('../../assets/img/logo.png')}
          />
          <Text style={registerStyles.titleText}>Create Account</Text>
        </View>
        <View style={registerStyles.inputContainer}>
          <AppTextInput
            placeholder='Name'
            value={name}
            onChangeText={text => setName(text)}
          />
          <AppTextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <AppTextInput
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <AppTextInput
            placeholder='Confirm Password'
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={registerStyles.signUpButton}
        >
          <Text style={registerStyles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={registerStyles.haveAccountButton}
        >
          <Text style={registerStyles.haveAccountText}>
            Already have an account
          </Text>
        </TouchableOpacity>

        <View style={registerStyles.buttonsContainer}>
          <SocialLoginButtons
            onPressGoogle={() => {}}
            onPressApple={() => {}}
            onPressTwitter={() => {}}
            onPressFacebook={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

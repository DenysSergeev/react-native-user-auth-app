import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { loginUser } from '../../server/server';
import AppTextInput from '../../shared/AppTextInput/AppTextInput';
import { validateLogin } from '../../utils/validation/validation';
import SocialLoginButtons from '../../shared/SocialLoginButtons/SocialLoginButtons';

import loginStyles from './styles';

const Login = ({ navigation }) => {
  const { navigate } = navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleLogin = async () => {
    try {
      setError({});

      const errorMessage = validateLogin(email, password);

      if (Object.keys(errorMessage).length > 0) {
        setError(errorMessage);
        return;
      }

      const user = await loginUser(email, password);
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigate('Dashboard', { name: user.name });
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <SafeAreaView>
      <View style={loginStyles.container}>
        <View style={loginStyles.logoContainer}>
          <Image
            style={loginStyles.logo}
            resizeMode='contain'
            source={require('../../assets/img/logo.png')}
          />
          <Text style={loginStyles.welcomeText}>
            Welcome back you've been missed!
          </Text>
        </View>

        <View style={loginStyles.inputContainer}>
          <AppTextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            error={error.email}
          />
          <AppTextInput
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            error={error.password}
          />
        </View>

        <View>
          <Text style={loginStyles.forgotPasswordText}>
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          style={loginStyles.signInButton}
        >
          <Text style={loginStyles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('Register');
          }}
          style={loginStyles.createAccountButton}
        >
          <Text style={loginStyles.createAccountText}>Create new account</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
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

export default Login;

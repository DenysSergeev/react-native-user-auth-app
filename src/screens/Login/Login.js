import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTextInput from '../../components/AppTextInput';
import { loginUser } from '../../server/server';

import loginStyles from './styles'

const Login = ({ navigation }) => {
  const { navigate } = navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [focused, setFocused] = useState(false);

  // useEffect(() => {
  //   const checkPersistentLogin = async () => {
  //     try {
  //       const storedUser = await AsyncStorage.getItem('user');
  //       if (storedUser) {
  //         const user = JSON.parse(storedUser);
  //         console.log('User already logged in persistently:', user);
  //         navigate('Dashboard', { name: user.name });
  //       }
  //     } catch (error) {
  //       console.error('Error checking persistent login:', error);
  //     }
  //   };

  //   checkPersistentLogin();
  // }, [navigate]);

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        console.log('User logged in:', user);

        await AsyncStorage.setItem('user', JSON.stringify(user));

        navigate('Dashboard', { name: user.name });
      } else {
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
          />
          <AppTextInput
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
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
            console.log('login');
            navigate('Register');
          }}
          style={loginStyles.createAccountButton}
        >
          <Text style={loginStyles.createAccountText}>Create new account</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 30 }}>
          <Text style={loginStyles.continueWithText}>or continue with</Text>

          <View style={loginStyles.socialButtonsContainer}>
            <TouchableOpacity style={loginStyles.socialButton}>
              <Ionicons name='logo-google' color='#000' size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={loginStyles.socialButton}>
                <Ionicons name='logo-apple' color='#000' size={25} />
              </TouchableOpacity>

              <TouchableOpacity style={loginStyles.socialButton}>
                <Ionicons name='logo-twitter' color='#000' size={25} />
              </TouchableOpacity>

              <TouchableOpacity style={loginStyles.socialButton}>
                <Ionicons name='logo-facebook' color='#000' size={25} />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

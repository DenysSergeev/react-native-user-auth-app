import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../../components/AppTextInput';
import { registerUser } from '../../server/server';
import registerStyles from './styles';

const Register = ({ navigation }) => {
  const { navigate } = navigation;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const newUser = await registerUser(name, email, password);
      console.log('User registered:', newUser);

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
          <AppTextInput placeholder='Confirm Password' />
        </View>
        <TouchableOpacity onPress={handleRegister} style={registerStyles.signUpButton}>
          <Text style={registerStyles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={registerStyles.haveAccountButton}
        >
          <Text style={registerStyles.haveAccountText}>Already have an account</Text>
        </TouchableOpacity>

        <View style={registerStyles.buttonsContainer}>
          <Text style={registerStyles.continueWithText}>or continue with</Text>
          <View style={registerStyles.socialButtonsContainer}>
            <View style={registerStyles.socialButtonsContainer}>
              <TouchableOpacity style={registerStyles.socialButton}>
                <Ionicons name='logo-google' color='#000' size={25} />
              </TouchableOpacity>

              <TouchableOpacity style={registerStyles.socialButton}>
                <Ionicons name='logo-apple' color='#000' size={25} />
              </TouchableOpacity>

              <TouchableOpacity style={registerStyles.socialButton}>
                <Ionicons name='logo-twitter' color='#000' size={25} />
              </TouchableOpacity>

              <TouchableOpacity style={registerStyles.socialButton}>
                <Ionicons name='logo-facebook' color='#000' size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

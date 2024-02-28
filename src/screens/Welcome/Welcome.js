import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import welcomeStyles from './styles'

const Welcome = ({ navigation }) => {
  const { navigate } = navigation;

  // useEffect(() => {
  //   // Check user login status when the Welcome screen is focused
  //   const checkLoginStatus = async () => {
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
  // }, [navigate]);

  return (
    <SafeAreaView style={welcomeStyles.container}>
      <View>
        <ImageBackground
          style={welcomeStyles.logo}
          resizeMode='contain'
          source={require('../../assets/img/logo.png')}
        />
        <View style={{ paddingHorizontal: 30, paddingBottom: 30, paddingTop: 10 }}>
          <Text style={welcomeStyles.descriptionText}>
            Втілюємо в життя проєкти, які допоможуть полегшити ваші бізнес-процеси!
          </Text>
        </View>
        <View style={welcomeStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={welcomeStyles.loginButton}
          >
            <Text style={[welcomeStyles.buttonText, { color: '#fff' }]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={welcomeStyles.registerButton}
          >
            <Text style={[welcomeStyles.buttonText, { color: '#000' }]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

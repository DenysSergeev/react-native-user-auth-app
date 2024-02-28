import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import dashboarsStyles from './styles';

const Dashboard = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation();

  const handleLogout = async () => {
    // await logoutUser();
    navigation.navigate('Welcome');
  };


  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {name ? (
        <Text style={dashboarsStyles.welcomeText}>
          Welcome, {name}! You're logged in.
        </Text>
      ) : (
        <Text style={dashboarsStyles.welcomeText}>Loading user data...</Text>
      )}

      <View style={dashboarsStyles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={dashboarsStyles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

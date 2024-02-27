import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{ height: height / 2.5, marginTop: 10 }}
          resizeMode='contain'
          source={require('../assets/img/logo.png')}
        />
        <View style={{ paddingHorizontal: 30, paddingBottom: 30, paddingTop: 10 }}>
          <Text style={{ fontSize: 30, color: '#1F41BB', textAlign: 'center' }}>
            Втілюємо в життя проєкти, які допоможуть полегшити ваші
            бізнес-процеси!
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log('login');
              navigate('Login');
            }}
            style={{
              backgroundColor: '#065bea',
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: '48%',
              borderRadius: 10,
              shadowColor: '#1f41bb',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: '48%',
              borderRadius: 10,
              shadowColor: '#FFF',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
            onPress={() => {
              console.log('login');
              navigate('Register');
            }}
          >
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

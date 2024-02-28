import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: height / 2.5,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 30,
    color: '#1F41BB',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#065bea',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '48%',
    borderRadius: 10,
    shadowColor: '#1f41bb',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  registerButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '48%',
    borderRadius: 10,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default welcomeStyles;

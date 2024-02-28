import { StyleSheet } from 'react-native';

const registerStyles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 70,
  },
  titleText: {
    fontSize: 25,
    color: '#1f41bb',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 20,
  },
  signUpButton: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#1F41BB',
    borderRadius: 10,
    shadowColor: '#1f41bb',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  signUpButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  haveAccountButton: {
    padding: 10,
  },
  haveAccountText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
  },
  continueWithText: {
    color: '#1f41bb',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonsContainer: {
    marginVertical: 30,
  },
  socialButtonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default registerStyles;

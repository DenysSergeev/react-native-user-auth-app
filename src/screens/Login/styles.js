import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 100,
  },
  welcomeText: {
    fontSize: 24,
    maxWidth: '60%',
    textAlign: 'center',
    fontWeight: '600',
  },
  inputContainer: {
    marginVertical: 30,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#1f41bb',
    alignSelf: 'flex-end',
  },
  signInButton: {
    padding: 20,
    marginVertical: 30,
    backgroundColor: '#1F41BB',
    borderRadius: 10,
    shadowColor: '#1f41bb',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  signInButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  createAccountButton: {
    paddingTop: 10,
  },
  createAccountText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default loginStyles;

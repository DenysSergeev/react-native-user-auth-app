import { StyleSheet } from 'react-native';

const socialButtonsStyle = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: 'center',
  },
  continueWithText: {
    color: '#1f41bb',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  socialButtonsContainer: {
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

export default socialButtonsStyle;

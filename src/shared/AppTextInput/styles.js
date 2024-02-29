import { StyleSheet } from 'react-native';

const stylesAppTextInput = StyleSheet.create({
  input: {
    fontSize: 14,
    padding: 20,
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#c2c2c2',
    borderWidth: 3,
  },
  focusedInput: {
    borderColor: '#1f41bb',
    borderWidth: 3,
    shadowOffset: { width: 4, height: 10 },
    shadowColor: '#1f41bb',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});

export default stylesAppTextInput;

import { Alert } from 'react-native';

export const isValidName = name => {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
};

export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validateInputs = (name, email, password, confirmPassword) => {
  if (!isValidName(name) || !isValidEmail(email)) {
    Alert.alert('Error', 'Please enter valid name and email');
    return false;
  }

  if (!password || !confirmPassword) {
    Alert.alert('Error', 'Please enter both password and confirm password');
    return false;
  }

  if (!validatePassword(password, confirmPassword)) {
    Alert.alert('Error', 'Password and Confirm Password do not match');
    return false;
  }

  return true;
};

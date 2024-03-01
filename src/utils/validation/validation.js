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

export const validateRegistr = (name, email, password, confirmPassword) => {
  const errors = {};

  if (!isValidName(name)) {
    errors.name = 'Please enter a valid name';
  }

  if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!password) {
    errors.password = 'Please enter a password';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (!validatePassword(password, confirmPassword)) {
    errors.confirmPassword = 'Password and Confirm Password do not match';
  }

  return errors;
};

export const validateLogin = (email, password) => {
  const errors = {};

  if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!password) {
    errors.password = 'Please enter a password';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';

export const registerUser = async (name, email, password) => {
  // Simulate registration logic
  const newUser = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    email,
    password,
  };

  try {
    // Retrieve existing users from AsyncStorage
    const existingUsers = await AsyncStorage.getItem(USERS_KEY);
    let users = existingUsers ? JSON.parse(existingUsers) : [];

    // Add the new user to the array
    users.push(newUser);

    // Store the updated array of users in AsyncStorage
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

    console.log('User registered:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error storing user data:', error);
    return null;
  }
};

export const loginUser = async (email, password) => {
  // Simulate login logic
  const storedUsers = await AsyncStorage.getItem(USERS_KEY);

  if (storedUsers) {
    const users = JSON.parse(storedUsers);

    // Find the user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    return user || null;
  }

  return null;
};
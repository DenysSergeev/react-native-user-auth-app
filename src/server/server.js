import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';

export const registerUser = async (name, email, password) => {
  const newUser = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    email,
    password,
  };

  try {
    const existingUsers = await AsyncStorage.getItem(USERS_KEY);
    let users = existingUsers ? JSON.parse(existingUsers) : [];

    users.push(newUser);

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

    console.log('User registered:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error storing user data:', error);
    return null;
  }
};

export const loginUser = async (email, password) => {
  const storedUsers = await AsyncStorage.getItem(USERS_KEY);

  if (storedUsers) {
    const users = JSON.parse(storedUsers);

    const user = users.find(u => u.email === email && u.password === password);

    return user || null;
  }

  return null;
};

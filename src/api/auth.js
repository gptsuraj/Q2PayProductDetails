import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Authentication failed');
  }
};

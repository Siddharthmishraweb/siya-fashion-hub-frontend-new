// api/auth.js
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/auth';

export const getUserData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/user`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Failed to get user data', error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Failed to sign in', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await axios.post(`${baseUrl}/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.error('Failed to sign out', error);
    throw error;
  }
};

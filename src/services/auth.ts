import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return jwtDecode(token) as User;
};

export const logout = () => {
  localStorage.removeItem('token');
};
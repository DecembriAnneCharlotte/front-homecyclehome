import axios from 'axios';

// const API_URL = 'http://localhost:3000/forfaits';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getForfaits = async (): Promise<string> => {
  const response = await axios.get(`${API_URL}/forfaits`);
  // const response = await axios.get(API_URL);
  return response.data;
};

// forfaits.service.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/forfaits';

export const getForfaits = async (): Promise<string> => {
  const response = await axios.get(API_URL);
  return response.data;
};

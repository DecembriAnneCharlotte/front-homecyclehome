import axios from 'axios';
import { Intervention } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getInterventions = async (): Promise<Intervention[]> => {
  const response = await axios.get(`${API_URL}/interventions`);
  return response.data;
};

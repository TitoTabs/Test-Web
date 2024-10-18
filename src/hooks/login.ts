import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async () => {
  try {
    const response = await axios.post(`${API_URL}/login`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

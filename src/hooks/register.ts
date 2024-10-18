import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useUser = async () => {
  const postRegister = async (data: any) => {
    try {
      const response = await axios.post(`${API_URL}/register`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister };
};

export default useUser;

import axios from "axios";
import Cookies from "js-cookie";
import { env } from "process";

const API_URL = env.BASE_URL; // 替換為你的 API URL

interface LoginResponse {
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
    username,
    password,
  });

  if (response.data.token) {
    Cookies.set("token", response.data.token, { expires: 7 });
  }

  return response.data;
};

export const fetchData = async (url: string) => {
  const token = Cookies.get("token");

  const response = await axios.get(`${API_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

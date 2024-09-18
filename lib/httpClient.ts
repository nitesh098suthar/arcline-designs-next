import axios from "axios";

const httpClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default httpClient;

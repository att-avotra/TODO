import axios from "axios";
// import interceptor from "./Interceptor.ts";

const baseURL = import.meta.env.VITE_API_BACKEND_URL;
if (!baseURL) {
  throw new Error("VITE_API_BACKEND_URL est undefined.");
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor(api);

export default api;

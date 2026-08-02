import axios from "axios";
 
// Point this at your Spring Boot backend.
// Set VITE_API_BASE_URL in your .env file (Vite requires the VITE_ prefix)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
 
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);
 
export default apiClient;
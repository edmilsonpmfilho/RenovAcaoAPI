// client/src/api/apiConfig.js
import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3001", // URL do servidor Express
});

export default api;

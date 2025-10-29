import axios from "axios";
// const token = localStorage.getItem("token");
const token = "1|1tnKW7fVqYk8pgqRPNRYYftsNLnY62ZRY5xW9pAe63d517e9";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
});
export default apiClient;

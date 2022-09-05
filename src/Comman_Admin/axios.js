import axios from "axios";

// console.log(process.env.REACT_APP_API_URL);
const api = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,

    baseURL: "http://localhost:5055",
    // baseURL: "http://174.138.21.74:5055",
    // baseURL: process.env.BASE_URL
});


export default api;

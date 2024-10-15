import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8000', // Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
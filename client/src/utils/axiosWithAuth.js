import axios from 'axios';

export default function axiosWithAuth() {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000', //clicking this link returns localhost:5000 (App is working +emoji)
    headers: {
      Authorization: token 
    }
  });
};
import axios from 'axios';

const baseURL = 'http://5e148887bce1d10014baea80.mockapi.io';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
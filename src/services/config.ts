import axios from 'axios';

const apiConfig = {
  baseURL: 'https://obmng.dbm.guestline.net/api/',

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

export const api = axios.create(apiConfig);

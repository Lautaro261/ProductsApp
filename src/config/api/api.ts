/* eslint-disable dot-notation */
import {STAGE, API_URL, API_URL_IOS, API_URL_ANDROID} from '@env';
import axios from 'axios';
import {Platform} from 'react-native';
import { StorageAdapter } from '../adapters/storage-adapter';

export const API_URL_BASE =
  (STAGE === 'prod')
    ? API_URL
    : Platform.OS === 'ios'
    ? API_URL_IOS
    : API_URL_ANDROID;

const apiAxiosCustom = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiAxiosCustom.interceptors.request.use(
  async (config) => {
    const token = await StorageAdapter.getItem('token');
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }
);

export {apiAxiosCustom};

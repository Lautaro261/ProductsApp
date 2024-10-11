import {STAGE, API_URL, API_URL_IOS, API_URL_ANDROID} from '@env';
import axios from 'axios';
import {Platform} from 'react-native';

export const API_URL_BASE =
  STAGE === 'prod'
    ? API_URL
    : Platform.OS === 'ios'
    ? API_URL_IOS
    : API_URL_ANDROID;

const apiAxiosCustom = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'aplication/json',
  },
});

export {apiAxiosCustom};

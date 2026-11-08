import axios, { type AxiosInstance } from 'axios';

const SERVER_API_BASE_URL = `${process.env.API_URL ?? 'http://localhost:3333'}/api`;
const BROWSER_API_BASE_URL = '/api';

function createFetcher(): AxiosInstance {
  return axios.create({
    baseURL:
      typeof window === 'undefined'
        ? SERVER_API_BASE_URL
        : BROWSER_API_BASE_URL,
    withCredentials: true,
    timeout: 5000,
    headers: { Accept: 'application/json' },
  });
}

export const publicFetcher = createFetcher();

export const privateFetcher = createFetcher();

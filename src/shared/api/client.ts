import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

import type { RefreshResponse } from '../../entities/auth/api/types';
import { useAuthStore } from '../../entities/auth/model/store';

import type { ApiResponse } from './types';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});

// 요청 인터셉터
instance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

let isRefreshing = false;

let failedQueue: Array<{
  resolve: (accessToken: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (accessToken: string | null = null, error: unknown) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (accessToken != null) {
      resolve(accessToken);
    } else {
      reject(error);
    }
  });

  // 큐 초기화
  failedQueue = [];
};

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response,

  async (error: AxiosError & { config: AxiosRequestConfig & { _retry?: boolean } }) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest.url?.includes('/auth/login')) {
      return Promise.reject(
        new Error(
          (error as AxiosError<{ message: string }>).response?.data?.message ??
            '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        ),
      );
    }

    if (originalRequest.url?.includes('/auth/refresh') || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (accessToken: string) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            }

            return resolve(instance(originalRequest));
          },
          reject,
        });
      });
    }

    isRefreshing = true;
    originalRequest._retry = true;

    try {
      const { data } = await axios.post<ApiResponse<RefreshResponse>>(
        'http://localhost:3000/auth/refresh',
        {},
        { withCredentials: true },
      );

      const accessToken = data.data.accessToken;

      useAuthStore.getState().setAccessToken(accessToken);

      processQueue(accessToken, null);

      if (originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      }

      return instance(originalRequest);
    } catch (error) {
      processQueue(null, error);

      useAuthStore.getState().logout();

      return Promise.reject(new Error('세션이 만료되었습니다. 다시 로그인해 주세요.'));
    } finally {
      isRefreshing = false;
    }
  },
);

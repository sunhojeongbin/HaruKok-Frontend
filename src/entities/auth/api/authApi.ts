import type { ApiResponse } from '../../../shared/api/types';
import { instance } from '../../../shared/api/client';

import type {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RefreshResponse,
  SendEmailRequest,
  SendEmailResponse,
  SignupRequest,
  SignupResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from './types';

export const authApi = {
  sendEmail: async (body: SendEmailRequest) => {
    const { data } = await instance.post<ApiResponse<SendEmailResponse>>('/auth/email/send', body);

    return data.data;
  },

  verifyEmail: async (body: VerifyEmailRequest) => {
    const { data } = await instance.post<ApiResponse<VerifyEmailResponse>>(
      '/auth/email/verify',
      body,
    );

    return data.data;
  },

  signup: async (body: SignupRequest) => {
    const { data } = await instance.post<ApiResponse<SignupResponse>>('/auth/signup', body);

    return data.data;
  },

  login: async (body: LoginRequest) => {
    const { data } = await instance.post<ApiResponse<LoginResponse>>('/auth/login', body);

    return data.data;
  },

  refresh: async () => {
    const { data } = await instance.post<ApiResponse<RefreshResponse>>('/auth/refresh');

    return data.data;
  },

  logout: async () => {
    const { data } = await instance.post<ApiResponse<LogoutResponse>>('/auth/logout');

    return data.data;
  },

  me: async () => {
    const { data } = await instance.get<ApiResponse<MeResponse>>('/auth/me');

    return data.data;
  },
};

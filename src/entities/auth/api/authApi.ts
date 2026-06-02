import { instance, type ApiResponse } from '@/shared/api';

import type {
  CheckPasswordRequest,
  CheckPasswordResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  MeResponse,
  RefreshResponse,
  ResendEmailRequest,
  ResendEmailResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SendEmailRequest,
  SendEmailResponse,
  SendTempPasswordRequest,
  SendTempPasswordResponse,
  SignupRequest,
  SignupResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  WithdrawResponse,
} from './types';

export const authApi = {
  sendEmail: async (body: SendEmailRequest) => {
    const { data } = await instance.post<ApiResponse<SendEmailResponse>>('/auth/email/send', body);

    return data.data;
  },

  resendEmail: async (body: ResendEmailRequest) => {
    const { data } = await instance.post<ApiResponse<ResendEmailResponse>>(
      '/auth/email/resend',
      body,
    );

    return data.data;
  },

  verifyEmail: async (body: VerifyEmailRequest) => {
    const { data } = await instance.post<ApiResponse<VerifyEmailResponse>>(
      '/auth/email/verify',
      body,
    );

    return data.data;
  },

  sendTempPassword: async (body: SendTempPasswordRequest) => {
    const { data } = await instance.post<ApiResponse<SendTempPasswordResponse>>(
      '/auth/password/temp/send',
      body,
    );

    return data.data;
  },

  resetPassword: async (body: ResetPasswordRequest) => {
    const { data } = await instance.post<ApiResponse<ResetPasswordResponse>>(
      '/auth/password/reset',
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

  withdraw: async () => {
    const { data } = await instance.delete<ApiResponse<WithdrawResponse>>('/auth/me');

    return data.data;
  },

  updatePassword: async (body: UpdatePasswordRequest) => {
    const { data } = await instance.post<ApiResponse<UpdatePasswordResponse>>(
      '/auth/me/update-pw',
      body,
    );

    return data.data;
  },

  checkPassword: async (body: CheckPasswordRequest) => {
    const { data } = await instance.post<ApiResponse<CheckPasswordResponse>>(
      '/auth/me/check-pw',
      body,
    );

    return data.data;
  },
};

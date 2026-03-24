export interface SendEmailRequest {
  email: string;
}

export interface SendEmailResponse {
  ok: boolean;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}

export interface VerifyEmailResponse {
  ok: boolean;
  signupToken: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  signupToken: string;
}

export interface SignupResponse {
  id: string;
  email: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

export interface RefreshResponse {
  accessToken: string;
}

export interface LogoutResponse {
  ok: boolean;
}

export interface MeResponse {
  id: string;
  email: string;
  name: string;
}

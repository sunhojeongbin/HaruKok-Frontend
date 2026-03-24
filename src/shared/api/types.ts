export interface ApiResponse<T> {
  httpCode: number;
  message: string;
  success: boolean;
  data: T;
}

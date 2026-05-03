import { instance, type ApiResponse } from '@shared/api';

import { toCategory, toCategoryList } from '../model/mapper';
import type {
  CategoryResponse,
  CreateCategoryRequest,
  DeleteCategoryResponse,
  ReorderCategoryItem,
  ReorderCategoryRequest,
  UpdateCategoryRequest,
} from './types';

export const categoryApi = {
  create: async (body: CreateCategoryRequest) => {
    const { data } = await instance.post<ApiResponse<CategoryResponse>>('/ctgs', body);

    return data.data;
  },

  getList: async () => {
    const { data } = await instance.get<ApiResponse<CategoryResponse[]>>('/ctgs');

    return toCategoryList(data.data);
  },

  getDetail: async (ctgId: string) => {
    const { data } = await instance.get<ApiResponse<CategoryResponse>>(`/ctgs/${ctgId}`);

    return toCategory(data.data);
  },

  update: async (ctgId: string, body: UpdateCategoryRequest) => {
    const { data } = await instance.patch<ApiResponse<CategoryResponse>>(`/ctgs/${ctgId}`, body);

    return data.data;
  },

  delete: async (ctgId: string) => {
    const { data } = await instance.delete<ApiResponse<DeleteCategoryResponse>>(`/ctgs/${ctgId}`);

    return data.data;
  },

  reorder: async (body: ReorderCategoryRequest) => {
    const { data } = await instance.patch<ApiResponse<ReorderCategoryItem[]>>('/ctgs/orders', body);

    return data.data;
  },
};

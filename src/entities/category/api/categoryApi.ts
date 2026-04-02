import type { ApiResponse } from '../../../shared/api/types';
import { instance } from '../../../shared/api/client';

import type {
  CategoryResponse,
  CreateCategoryRequest,
  DeleteCategoryResponse,
  ReorderCategoryItem,
  ReorderCategoryRequest,
  UpdateCategoryRequest,
} from './types';
import { toCategory, toCategoryList } from '../model/mapper';

export const categoryApi = {
  create: async (body: CreateCategoryRequest) => {
    const { data } = await instance.post<ApiResponse<CategoryResponse>>('/ctg', body);

    return data.data;
  },

  getList: async () => {
    const { data } = await instance.get<ApiResponse<CategoryResponse[]>>('/ctg');

    return toCategoryList(data.data);
  },

  getDetail: async (ctgId: string) => {
    const { data } = await instance.get<ApiResponse<CategoryResponse>>(`/ctg/${ctgId}`);

    return toCategory(data.data);
  },

  update: async (ctgId: string, body: UpdateCategoryRequest) => {
    const { data } = await instance.patch<ApiResponse<CategoryResponse>>(`/ctg/${ctgId}`, body);

    return data.data;
  },

  delete: async (ctgId: string) => {
    const { data } = await instance.delete<ApiResponse<DeleteCategoryResponse>>(`/ctg/${ctgId}`);

    return data.data;
  },

  reorder: async (body: ReorderCategoryRequest) => {
    const { data } = await instance.patch<ApiResponse<ReorderCategoryItem[]>>('/ctg/order', body);

    return data.data;
  },
};

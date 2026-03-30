import type { CategoryVisibility } from '../model/types';

export interface CategoryResponse {
  ctgId: string;
  usrId: string;
  ctgName: string;
  visibility: CategoryVisibility;
  colorCode: string;
  sortOrder: number;
  isEnded: boolean;
  endedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategoryRequest {
  ctgName: string;
  visibility: CategoryVisibility;
  colorCode: string;
}

export interface UpdateCategoryRequest extends CreateCategoryRequest {
  isEnded: boolean;
}

export interface DeleteCategoryResponse {
  ctgId: string;
}

export interface ReorderCategoryRequest {
  ctgIds: string[];
}

export interface ReorderCategoryItem {
  ctgId: string;
  sortOrder: number;
}

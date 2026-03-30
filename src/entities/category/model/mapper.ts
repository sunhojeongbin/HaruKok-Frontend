import type { CategoryResponse } from '../api/types';
import type { Category } from './types';

export const toCategory = (res: CategoryResponse): Category => {
  return {
    id: res.ctgId,
    name: res.ctgName,
    visibility: res.visibility,
    color: res.colorCode,
    order: res.sortOrder,
    isEnded: res.isEnded,
  };
};

export const toCategoryList = (res: CategoryResponse[]): Category[] => {
  if (!res) return [];

  return res.map(toCategory);
};

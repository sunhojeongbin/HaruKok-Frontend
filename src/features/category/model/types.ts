import type { CategoryVisibility } from '../../../entities/category/model/types';

export interface CategoryFormValues {
  name: string;
  visibility: CategoryVisibility;
  color: string;
}

import type { CategoryVisibility } from '../../../entities/category';

export interface CategoryFormValues {
  name: string;
  visibility: CategoryVisibility;
  color: string;
}

export type CategoryVisibility = 'FRIENDS' | 'PRIVATE';

export interface Category {
  id: string;
  name: string;
  visibility: CategoryVisibility;
  color: string;
  order: number;
  isEnded: boolean;
}

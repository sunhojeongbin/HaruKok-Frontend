export interface Todo {
  id: string;
  categoryId: string;
  content: string;
  memo: string;
  date: string;
  isCompleted: boolean;
  order: number;
}

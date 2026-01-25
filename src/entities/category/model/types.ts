import type { ITodo } from '../../todo/model/types';

export interface ICategory {
  id: string;
  name: string;
  todos: ITodo[];
}

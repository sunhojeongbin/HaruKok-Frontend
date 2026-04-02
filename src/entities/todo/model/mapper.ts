import type { TodoResponse } from '../api/types';
import type { Todo } from './types';

export const toTodo = (res: TodoResponse): Todo => {
  return {
    id: res.todoId,
    categoryId: res.ctgId,
    content: res.content,
    memo: res.memo ?? '',
    date: res.todoDate,
    isCompleted: res.isCompleted,
    order: res.sortOrder,
  };
};

export const toTodoList = (res: TodoResponse[]): Todo[] => {
  if (!res) return [];

  return res.map(toTodo);
};

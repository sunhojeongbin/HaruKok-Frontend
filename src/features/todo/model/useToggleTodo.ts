import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Todo } from '../../../entities/todo/model/types';
import { todoApi } from '../../../entities/todo/api/todoApi';

interface UseToggleTodoParams {
  yearMonth: string;
}

export const useToggleTodo = ({ yearMonth }: UseToggleTodoParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoId: string) => todoApi.toggle(todoId),
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>(['todos', yearMonth], (old = []) =>
        old.map((todo) =>
          todo.id === updatedTodo.todoId ? { ...todo, isCompleted: updatedTodo.isCompleted } : todo,
        ),
      );
    },
  });
};

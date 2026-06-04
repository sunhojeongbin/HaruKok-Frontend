import { useMutation, useQueryClient } from '@tanstack/react-query';

import { todoApi, type UpdateTodoRequest } from '@entities/todo';

interface UseUpdateTodoParams {
  todoId: string;
  yearMonth: string;
}

export const useUpdateTodo = ({ todoId, yearMonth }: UseUpdateTodoParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UpdateTodoRequest) => todoApi.update(todoId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', yearMonth] });
    },
  });
};

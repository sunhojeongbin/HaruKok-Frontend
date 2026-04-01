import { useMutation, useQueryClient } from '@tanstack/react-query';

import { todoApi } from '../../../entities/todo/api/todoApi';

interface UseCreateTodoParams {
  yearMonth: string;
}

export const useCreateTodo = ({ yearMonth }: UseCreateTodoParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: todoApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', yearMonth] });
    },
  });
};

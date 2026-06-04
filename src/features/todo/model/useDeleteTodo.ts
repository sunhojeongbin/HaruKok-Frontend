import { useMutation, useQueryClient } from '@tanstack/react-query';

import { translate } from '@/shared/lib/i18n';
import { toast } from '@shared/ui/toast';

import { todoApi } from '@entities/todo';

interface UseDeleteTodoParams {
  todoId: string;
  yearMonth: string;
}

export const useDeleteTodo = ({ todoId, yearMonth }: UseDeleteTodoParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => todoApi.delete(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', yearMonth] });
    },
    onError: (error) => {
      toast.error(error.message || translate('todo.deleteError'));
    },
  });
};

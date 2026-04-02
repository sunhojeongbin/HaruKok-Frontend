import { useQuery } from '@tanstack/react-query';

import { todoApi } from '../api/todoApi';

interface UseTodoParams {
  yearMonth: string;
}

export const useTodos = ({ yearMonth }: UseTodoParams) => {
  return useQuery({
    queryKey: ['todos', yearMonth],
    queryFn: () => todoApi.getList(yearMonth),
  });
};

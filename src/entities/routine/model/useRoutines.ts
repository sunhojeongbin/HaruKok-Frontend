import { useQuery } from '@tanstack/react-query';

import { routineApi } from '../api/routineApi';

export const useRoutines = () => {
  return useQuery({
    queryKey: ['routines'],
    queryFn: routineApi.getList,
  });
};

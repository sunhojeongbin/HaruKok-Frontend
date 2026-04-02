import type { ApiResponse } from '../../../shared/api/types';
import { instance } from '../../../shared/api/client';

import type { CreateRoutineRequest, RoutineResponse } from './types';
import { toRoutineList } from './../model/mapper';

export const routineApi = {
  create: async (body: CreateRoutineRequest) => {
    const { data } = await instance.post<ApiResponse<RoutineResponse>>('/rtn', body);

    return data.data;
  },

  getList: async () => {
    const { data } = await instance.get<ApiResponse<RoutineResponse[]>>('/rtn');

    return toRoutineList(data.data);
  },
};

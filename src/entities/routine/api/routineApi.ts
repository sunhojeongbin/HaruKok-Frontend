import type { ApiResponse } from '../../../shared/api/types';
import { instance } from '../../../shared/api/client';

import type {
  CreateRoutineRequest,
  DeleteRoutineResponse,
  ReorderRoutineItem,
  ReorderRoutineRequest,
  RoutineResponse,
  UpdateRoutineRequest,
} from './types';
import { toRoutine, toRoutineList } from './../model/mapper';

export const routineApi = {
  create: async (body: CreateRoutineRequest) => {
    const { data } = await instance.post<ApiResponse<RoutineResponse>>('/rtn', body);

    return data.data;
  },

  getList: async () => {
    const { data } = await instance.get<ApiResponse<RoutineResponse[]>>('/rtn');

    return toRoutineList(data.data);
  },

  getDetail: async (rtnId: string) => {
    const { data } = await instance.get<ApiResponse<RoutineResponse>>(`/rtn/${rtnId}`);

    return toRoutine(data.data);
  },

  update: async (rtnId: string, body: UpdateRoutineRequest) => {
    const { data } = await instance.patch<ApiResponse<RoutineResponse>>(`/rtn/${rtnId}`, body);

    return data.data;
  },

  delete: async (rtnId: string) => {
    const { data } = await instance.delete<ApiResponse<DeleteRoutineResponse>>(`/rtn/${rtnId}`);

    return data.data;
  },

  reorder: async (body: ReorderRoutineRequest) => {
    const { data } = await instance.patch<ApiResponse<ReorderRoutineItem[]>>('/rtn/order', body);

    return data.data;
  },
};

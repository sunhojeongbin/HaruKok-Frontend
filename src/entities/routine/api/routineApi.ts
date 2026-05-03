import { instance, type ApiResponse } from '@shared/api';

import { toRoutine, toRoutineList } from '../model/mapper';
import type {
  CreateRoutineRequest,
  DeleteRoutineResponse,
  ReorderRoutineItem,
  ReorderRoutineRequest,
  RoutineResponse,
  UpdateRoutineRequest,
} from './types';

export const routineApi = {
  create: async (body: CreateRoutineRequest) => {
    const { data } = await instance.post<ApiResponse<RoutineResponse>>('/rtns', body);

    return data.data;
  },

  getList: async () => {
    const { data } = await instance.get<ApiResponse<RoutineResponse[]>>('/rtns');

    return toRoutineList(data.data);
  },

  getDetail: async (rtnId: string) => {
    const { data } = await instance.get<ApiResponse<RoutineResponse>>(`/rtns/${rtnId}`);

    return toRoutine(data.data);
  },

  update: async (rtnId: string, body: UpdateRoutineRequest) => {
    const { data } = await instance.patch<ApiResponse<RoutineResponse>>(`/rtns/${rtnId}`, body);

    return data.data;
  },

  delete: async (rtnId: string) => {
    const { data } = await instance.delete<ApiResponse<DeleteRoutineResponse>>(`/rtns/${rtnId}`);

    return data.data;
  },

  reorder: async (body: ReorderRoutineRequest) => {
    const { data } = await instance.patch<ApiResponse<ReorderRoutineItem[]>>('/rtns/orders', body);

    return data.data;
  },
};

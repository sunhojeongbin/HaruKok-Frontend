import type { ApiResponse } from '../../../shared/api/types';
import { instance } from '../../../shared/api/client';

import type {
  CreateTodoRequest,
  DeleteTodoResponse,
  RepeatNextTodoItem,
  RepeatNextTodoRequest,
  TodoResponse,
  ToggleTodoResponse,
  UpdateTodoRequest,
} from './types';
import { toTodoList, toTodo } from '../model/mapper';

export const todoApi = {
  create: async (body: CreateTodoRequest) => {
    const { data } = await instance.post<ApiResponse<TodoResponse>>('/todos', body);

    return data.data;
  },

  getList: async (yearMonth: string) => {
    const { data } = await instance.get<ApiResponse<TodoResponse[]>>('/todos', {
      params: { yearMonth },
    });

    return toTodoList(data.data);
  },

  getDetail: async (todoId: string) => {
    const { data } = await instance.get<ApiResponse<TodoResponse>>(`/todos/${todoId}`);

    return toTodo(data.data);
  },

  update: async (todoId: string, body: UpdateTodoRequest) => {
    const { data } = await instance.patch<ApiResponse<TodoResponse>>(`/todos/${todoId}`, body);

    return data.data;
  },

  delete: async (todoId: string) => {
    const { data } = await instance.delete<ApiResponse<DeleteTodoResponse>>(`/todos/${todoId}`);

    return data.data;
  },

  toggle: async (todoId: string) => {
    const { data } = await instance.patch<ApiResponse<ToggleTodoResponse>>(`/todos/${todoId}/comp`);

    return data.data;
  },

  repeatToday: async (todoId: string) => {
    const { data } = await instance.post<ApiResponse<TodoResponse>>(
      `/todos/${todoId}/repeat/today`,
    );

    return data.data;
  },

  repeatTomorrow: async (todoId: string) => {
    const { data } = await instance.post<ApiResponse<TodoResponse>>(
      `/todos/${todoId}/repeat/tomorrow`,
    );

    return data.data;
  },

  repeatNext: async (todoId: string, body: RepeatNextTodoRequest) => {
    const { data } = await instance.post<ApiResponse<RepeatNextTodoItem[]>>(
      `/todos/${todoId}/repeat/next`,
      body,
    );

    return data.data;
  },
};

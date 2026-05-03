export interface TodoResponse {
  todoId: string;
  usrId: string;
  ctgId: string;
  content: string;
  memo: string | null;
  todoDate: string;
  isCompleted: boolean;
  completedAt: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoRequest {
  ctgId: string;
  content: string;
  memo?: string;
  todoDate: string;
}

export interface TodoSearchItem {
  todoDate: string;
  content: string;
}

export interface UpdateTodoRequest {
  ctgId?: string;
  content?: string;
  memo?: string;
}

export interface DeleteTodoResponse {
  todoId: string;
}

export interface ToggleTodoResponse {
  todoId: string;
  isCompleted: boolean;
  completedAt: string | null;
}

export interface RepeatNextTodoRequest {
  dates: string[];
}

export interface RepeatNextTodoItem {
  todoId: string;
  todoDate: string;
}

import type { RepeatType } from '../model/types';

export interface RepeatItem {
  rtnRptId: string;
  rptTypeCd: RepeatType;
  dayOfWeek: number | null;
  dayOfMth: number | null;
}

export interface RoutineResponse {
  rtnId: string;
  usrId: string;
  ctgId: string;
  ctgColorCode: string;
  rtnContent: string;
  rptTypeCd: RepeatType;
  startDt: string;
  endDt: string;
  alarmTime: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  repeats: RepeatItem[];
  createdTodoCount: number;
}

export interface CreateRoutineRequest {
  ctgId: string;
  rtnContent: string;
  startDt: string;
  endDt: string;
  rptTypeCd: RepeatType;
  dayOfWeek?: number[];
  dayOfMth?: number[];
  alarmTime?: string;
}

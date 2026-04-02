import type { RepeatItem, RoutineResponse } from '../api/types';
import type { Repeat, Routine } from './types';

const toRepeat = (res: RepeatItem): Repeat => {
  return {
    id: res.rtnRptId,
    type: res.rptTypeCd,
    dayOfWeek: res.dayOfWeek,
    dayOfMonth: res.dayOfMth,
  };
};

export const toRoutine = (res: RoutineResponse): Routine => {
  return {
    id: res.rtnId,
    categoryId: res.ctgId,
    content: res.rtnContent,
    repeatType: res.rptTypeCd,
    startDate: res.startDt,
    endDate: res.endDt,
    alarmTime: res.alarmTime,
    order: res.sortOrder,
    repeats: res.repeats.map(toRepeat),
  };
};

export const toRoutineList = (res: RoutineResponse[]): Routine[] => {
  if (!res) return [];

  return res.map(toRoutine);
};

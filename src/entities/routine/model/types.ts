export type RepeatType = 'DAILY' | 'WEEKLY' | 'MONTHLY';

export interface Repeat {
  id: string;
  type: RepeatType;
  dayOfWeek: number | null;
  dayOfMonth: number | null;
}

export interface Routine {
  id: string;
  categoryId: string;
  content: string;
  repeatType: RepeatType;
  startDate: string;
  endDate: string;
  alarmTime: string | null;
  order: number;
  repeats: Repeat[];
}

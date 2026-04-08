import { useNavigate } from 'react-router-dom';

import type { Repeat, RepeatType, Routine } from '../model/types';

interface RoutineItemProps {
  routine: Routine;
}

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const getSortedValues = (repeats: Repeat[], key: 'dayOfWeek' | 'dayOfMonth') => {
  return repeats
    .map((repeat) => repeat[key])
    .filter((value): value is number => value !== null)
    .sort((a, b) => a - b);
};

const formatRepeat = (repeatType: RepeatType, repeats: Repeat[]): string => {
  if (repeatType === 'DAILY') return '매일';

  if (repeatType === 'WEEKLY') {
    const labels = getSortedValues(repeats, 'dayOfWeek').map((day) => WEEK_DAYS[day]);

    return labels.length ? `매주 ${labels.join(', ')}` : '매주';
  }

  const labels = getSortedValues(repeats, 'dayOfMonth').map((date) => `${date}일`);

  return labels.length ? `매월 ${labels.join(', ')}` : '매월';
};

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      onClick={() => navigate(`/routines/${routine.id}/edit`)}
      className='flex flex-col gap-1 rounded-lg bg-[#f9fafb] p-4 text-left'
    >
      <p className='text-sm font-medium'>{routine.content}</p>

      <div className='flex flex-col gap-1 text-xs text-[#b2b8c0]'>
        <span>
          {routine.startDate.replaceAll('-', '. ')} ~ {routine.endDate.replaceAll('-', '. ')}
        </span>
        <span>
          {formatRepeat(routine.repeatType, routine.repeats)}
          {routine.alarmTime && ` / ${routine.alarmTime.slice(0, 5)}`}
        </span>
      </div>
    </button>
  );
};

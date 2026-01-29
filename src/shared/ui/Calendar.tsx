import { useState } from 'react';

interface ICalendarProps {
  onDateSelect?: (date: Date) => void;
}

export const Calendar = ({ onDateSelect }: ICalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formatYearMonth = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDate = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = firstDate.getDay();

  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDate.getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const today = new Date();

  const isToday = (day: number | null) => {
    if (day === null) return false;

    return (
      today.getFullYear() === currentYear &&
      today.getMonth() === currentMonth &&
      today.getDate() === day
    );
  };

  const isSelected = (day: number | null) => {
    if (day === null) return false;

    return (
      selectedDate.getFullYear() === currentYear &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getDate() === day
    );
  };

  const handleClick = (day: number | null) => {
    if (day === null) return;

    setSelectedDate(new Date(currentYear, currentMonth, day));
    onDateSelect?.(new Date(currentYear, currentMonth, day));
  };

  return (
    <div className='rounded-lg bg-white p-4'>
      <div className='mb-4'>
        <span className='text-sm font-medium'>{formatYearMonth(currentDate)}</span>
      </div>

      <div className='mb-2 grid grid-cols-7 text-center'>
        {weekDays.map((day, index) => (
          <div
            className={`text-xs font-medium ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-[#b2b8c0]'}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-7 text-center'>
        {calendarDays.map((day, index) => {
          const dayOfWeek = index % 7;

          return (
            <div
              key={index}
              onClick={() => handleClick(day)}
              className='flex h-10 items-center justify-center text-sm'
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  isSelected(day)
                    ? 'bg-[#aad1f0] font-medium text-white'
                    : isToday(day)
                      ? 'bg-[#f3f5f6] font-medium'
                      : dayOfWeek === 0
                        ? 'text-red-500'
                        : dayOfWeek === 6
                          ? 'text-blue-500'
                          : ''
                }`}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

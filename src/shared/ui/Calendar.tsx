import { useMemo, useRef, useState } from 'react';

import { IconButton } from './IconButton';

type ViewMode = 'week' | 'month';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

export const Calendar = ({ onDateSelect }: CalendarProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // 선택된 날짜

  const touchStartX = useRef<number>(0); // 터치가 시작된 x 좌표
  const touchEndX = useRef<number>(0); // 터치가 끝난 x 좌표
  const isSwiping = useRef<boolean>(false); // 현재 스와이프 중인지 여부

  /** 날짜를 "YYYY년 M월" 형식으로 변환 */
  const formatYearMonth = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  // 현재 뷰 모드에 따라 기준이 되는 날짜
  const baseDate = viewMode === 'week' ? currentWeek : currentDate;

  const weekCalendarDays = useMemo(() => {
    if (viewMode !== 'week') return [];

    // 기준이 되는 주의 시작 날짜
    const weekStart = new Date(currentWeek);
    weekStart.setDate(currentWeek.getDate() - currentWeek.getDay());

    const calendarDays: Date[] = [];

    // 기준이 되는 주 날짜 채우기
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      calendarDays.push(date);
    }

    return calendarDays;
  }, [currentWeek, viewMode]);

  const monthCalendarDays = useMemo(() => {
    if (viewMode !== 'month') return [];

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // 기준이 되는 달의 1일과 요일
    const firstDate = new Date(currentYear, currentMonth, 1);
    const firstDayOfWeek = firstDate.getDay();

    // 기준이 되는 달의 마지막 날짜와 총 일수
    const lastDate = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDate.getDate();

    // 이전 달의 마지막 날짜
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

    const calendarDays: Date[] = [];

    // 첫 주 빈칸을 이전 달 날짜로 채우기
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - 1, prevMonthLastDay - i);
      calendarDays.push(date);
    }

    // 기준이 되는 달 날짜 채우기
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      calendarDays.push(date);
    }

    // 기준이 되는 달의 마지막 요일
    const lastDayOfWeek = lastDate.getDay();

    // 마지막 주의 남은 빈칸 수
    const remainingCells = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek;

    // 마지막 주 빈칸을 다음 달 날짜로 채우기
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(currentYear, currentMonth + 1, day);
      calendarDays.push(date);
    }

    return calendarDays;
  }, [currentDate, viewMode]);

  const calendarDays = viewMode === 'week' ? weekCalendarDays : monthCalendarDays;

  /** 오늘 날짜인지 확인 */
  const isToday = (date: Date) => {
    const today = new Date();

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  /** 선택된 날짜인지 확인 */
  const isSelected = (date: Date) => {
    return (
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
    );
  };

  /** 기준이 되는 달의 날짜인지 확인 */
  const isCurrentMonth = (date: Date) => {
    return date.getFullYear() === baseDate.getFullYear() && date.getMonth() === baseDate.getMonth();
  };

  const handleClick = (date: Date) => {
    // 스와이프 중이면 클릭 처리하지 않음
    if (isSwiping.current) {
      isSwiping.current = false;
      return;
    }

    setSelectedDate(date);
    setCurrentWeek(date);
    setCurrentDate(date);
    onDateSelect?.(date);
  };

  /** 주간 및 월간 뷰 모드 전환 */
  const toggleViewMode = () => {
    const nextViewMode = viewMode === 'week' ? 'month' : 'week';

    if (nextViewMode === 'week') {
      if (
        selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() === currentDate.getMonth()
      ) {
        setCurrentWeek(selectedDate);
      } else {
        setCurrentWeek(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));
      }
    }

    setViewMode(nextViewMode);
  };

  /** 이전 주 또는 이전 달로 이동 */
  const goToPrevious = () => {
    if (viewMode === 'week') {
      const prevWeek = new Date(currentWeek);
      prevWeek.setDate(currentWeek.getDate() - 7);

      setCurrentWeek(prevWeek);
      setCurrentDate(prevWeek);
    } else {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    }
  };

  /** 다음 주 또는 다음 달로 이동 */
  const goToNext = () => {
    if (viewMode === 'week') {
      const nextWeek = new Date(currentWeek);
      nextWeek.setDate(currentWeek.getDate() + 7);

      setCurrentWeek(nextWeek);
      setCurrentDate(nextWeek);
    } else {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;

    const distance = Math.abs(touchStartX.current - touchEndX.current);

    // 10px 이상 움직이면 스와이프로 간주
    if (distance > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) <= minSwipeDistance) return;

    if (swipeDistance > 0) {
      goToNext();
    } else {
      goToPrevious();
    }

    setTimeout(() => {
      isSwiping.current = false;
    }, 100);
  };

  return (
    <div className='rounded-lg bg-white p-4'>
      <div className='mb-4 flex items-center gap-2'>
        <span className='text-sm font-medium'>{formatYearMonth(baseDate)}</span>
        <IconButton
          icon={viewMode === 'week' ? 'ArrowDown' : 'ArrowUp'}
          iconSize={20}
          color='#b2b8c0'
          onClick={toggleViewMode}
        />
      </div>

      <div className='mb-2 grid grid-cols-7 text-center'>
        {weekDays.map((day, index) => (
          <div
            key={day}
            className={`text-xs font-medium ${
              index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-[#b2b8c0]'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div
        className='grid grid-cols-7 text-center'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {calendarDays.map((date, index) => {
          const dayOfWeek = date.getDay();

          return (
            <div
              key={index}
              onClick={() => handleClick(date)}
              className='flex h-10 cursor-pointer items-center justify-center text-sm'
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  isSelected(date)
                    ? 'bg-[#aad1f0] font-medium text-white'
                    : isToday(date)
                      ? 'bg-[#f3f4f6] font-medium'
                      : !isCurrentMonth(date)
                        ? 'text-gray-300'
                        : dayOfWeek === 0
                          ? 'text-red-500'
                          : dayOfWeek === 6
                            ? 'text-blue-500'
                            : ''
                }`}
              >
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

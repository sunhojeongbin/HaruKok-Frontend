import { useState } from 'react';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isWeekView, setIsWeekView] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // 주간 뷰일 때는 currentWeek 기준으로 연월 계산
  const displayYear = isWeekView ? currentWeek.getFullYear() : currentYear;
  const displayMonth = isWeekView ? currentWeek.getMonth() : currentMonth;

  // 해당 월의 첫 번째 날과 마지막 날
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // 해당 월의 첫 번째 날이 무슨 요일인지 (0: 일요일 ~ 6: 토요일)
  const firstDayWeek = firstDayOfMonth.getDay();

  // 해당 월의 총 일수
  const daysInMonth = lastDayOfMonth.getDate();

  // 이전 달의 마지막 날
  const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 달력에 표시할 날짜 배열 생성
  const calendarDays = [];

  // 이전 달의 마지막 날짜들로 빈 공간 채우기
  for (let i = firstDayWeek - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthLastDay - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    });
  }

  // 현재 달의 날짜들 추가
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day: day,
      isCurrentMonth: true,
      isPrevMonth: false,
    });
  }

  // 다음 달 날짜로 나머지 공간 채우기 (총 42개 칸을 채우기 위해)
  const remainingCells = 42 - calendarDays.length;
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day: day,
      isCurrentMonth: false,
      isPrevMonth: false,
    });
  }

  // 주간 뷰를 위한 현재 주의 날짜들 계산
  const getWeekDays = () => {
    const startOfWeek = new Date(currentWeek);
    startOfWeek.setDate(currentWeek.getDate() - currentWeek.getDay());

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDays.push({
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === displayMonth,
        isPrevMonth: false,
      });
    }
    return weekDays;
  };

  // 현재 뷰에 따라 표시할 날짜 배열 선택
  const displayDays = isWeekView ? getWeekDays() : calendarDays;

  /** 주간/월간 뷰 전환 */
  const toggleView = () => {
    setIsWeekView(!isWeekView);
  };

  /** 이전 월로 이동 */
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  /** 다음 월로 이동 */
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  /** 이전 주로 이동 */
  const goToPreviousWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
  };

  /** 다음 주로 이동 */
  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  /** 터치 이벤트 핸들러 */
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // 최소 스와이프 거리
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // 왼쪽 스와이프 (다음으로)
        if (isWeekView) {
          goToNextWeek();
        } else {
          goToNextMonth();
        }
      } else {
        // 오른쪽 스와이프 (이전으로)
        if (isWeekView) {
          goToPreviousWeek();
        } else {
          goToPreviousMonth();
        }
      }
    }
  };

  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div
      className='w-full max-w-md mx-auto bg-white rounded-lg p-4'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 헤더: 연월 표시 */}
      <div className='mb-4'>
        <h2 className='text-lg font-medium text-[#313131] text-left'>
          {displayYear}년 {monthNames[displayMonth]}
        </h2>
      </div>

      {/* 요일 헤더 */}
      <div className='grid grid-cols-7 gap-1 mb-2 text-center'>
        {weekDays.map((day, index) => (
          <div
            key={day}
            className={`h-8 flex items-center justify-center text-sm font-medium ${
              index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className={`grid grid-cols-7 gap-1 ${isWeekView ? 'grid-rows-1' : ''} mb-4 text-center`}>
        {displayDays.map((dateInfo, index) => {
          const dayOfWeek = index % 7;
          const today = new Date();
          const isToday =
            dateInfo.isCurrentMonth &&
            dateInfo.day === today.getDate() &&
            displayMonth === today.getMonth() &&
            displayYear === today.getFullYear();

          // 주간 뷰에서는 한 줄만 표시
          if (isWeekView && index >= 7) return null;

          return (
            <div
              key={index}
              className='h-10 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-100 rounded'
            >
              <span
                className={`${
                  isToday
                    ? 'bg-[#aad1f0] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium'
                    : !dateInfo.isCurrentMonth
                      ? 'text-gray-300'
                      : dayOfWeek === 0
                        ? 'text-red-500'
                        : dayOfWeek === 6
                          ? 'text-blue-500'
                          : 'text-[#313131]'
                }`}
              >
                {dateInfo.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* 주간/월간 뷰 전환 버튼 */}
      <div className='flex justify-center'>
        <button onClick={toggleView} className='hover:bg-gray-100 rounded flex items-center'>
          <svg
            width='72'
            height='28'
            viewBox='0 0 72 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isWeekView ? (
              <path
                d='M22 13L36 21L50 13'
                stroke='#b2b8c0'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            ) : (
              <path
                d='M22 15L36 7L50 15'
                stroke='#b2b8c0'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

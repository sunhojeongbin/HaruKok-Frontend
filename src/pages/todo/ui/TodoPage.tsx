import { Calendar } from '../../../shared/ui/Calendar';

export const TodoPage = () => {
    return (
        <div className='bg-[#f3f4f6] h-screen p-4'>
            <Calendar />

            {/* 투두 리스트 전체 박스 */}
            <div className='mt-4 bg-white rounded-lg p-4'>
                {/* Dev 카테고리 */}
                <div className='flex items-center justify-between mb-3 px-3 py-2 bg-[#d6b7e4] rounded-[10px]'>
                    <span className=' font-medium text-[#313131]'>Dev</span>
                    <button className='p-2 bg-white rounded-full shadow-md'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-4 h-4 text-gray-500'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 4.5v15m7.5-7.5h-15'
                            />
                        </svg>
                    </button>
                </div>
                <ul>
                    <li className='flex items-center gap-2 mb-2'>
                        <span className='w-4 h-4 rounded-full bg-[#f3f4f6]'></span>
                        <span className='text-sm text-gray-700'>Flutter SDK 설치 및 PATH 등록</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='w-4 h-4 rounded-full bg-[#48cc27] flex items-center justify-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2.5}
                                stroke='white'
                                className='w-3 h-3'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4.5 12.75l6 6 9-13.5'
                                />
                            </svg>
                        </span>
                        <span className='text-sm text-gray-700 line-through'>
                            VS Code 개발 환경 설정하기
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

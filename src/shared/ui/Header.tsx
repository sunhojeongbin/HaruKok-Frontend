interface IHeaderProps {
    children: React.ReactNode;
    onBackClick?: () => void;
    onCloseClick?: () => void;
}

export const Header = ({ children, onBackClick, onCloseClick }: IHeaderProps) => {
    return (
        <header className='w-full h-12 grid grid-cols-3 items-center px-4 bg-white fixed top-0'>
            <div className='flex items-center'>
                {onBackClick && (
                    <button onClick={onBackClick} className='text-[#313131]'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <path
                                d='M15 18l-6-6 6-6'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                )}
            </div>

            <div className='text-[#313131] text-lg font-[500] text-center'>{children}</div>

            <div className='flex items-center justify-end'>
                {onCloseClick && (
                    <button onClick={onCloseClick} className='text-[#313131]'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <path
                                d='M18 6L6 18M6 6l12 12'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                )}
            </div>
        </header>
    );
};

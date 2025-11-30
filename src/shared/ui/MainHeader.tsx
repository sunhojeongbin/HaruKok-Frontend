import { useLocation } from 'react-router-dom';

export const HeaderTest = () => {
    const location = useLocation();

    return (
        <header className='flex justify-end gap-4 bg-[#f3f5f6] p-4'>
            {location.pathname.startsWith('/my') ? (
                <>
                    <button>설정</button>
                </>
            ) : (
                <>
                    <button>
                        <img src='/icons/ic-search.svg' alt='검색' />
                    </button>
                    <button>
                        <img src='/icons/ic-notification.svg' alt='알림' />
                    </button>
                    <button>
                        <img src='/icons/ic-management.svg' alt='관리' />
                    </button>
                </>
            )}
        </header>
    );
};

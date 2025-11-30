import { useNavigate } from 'react-router-dom';
import { Button } from '../../../shared/ui';
import { KakaoLoginButton } from '../../../features/social-login/ui/KakaoLoginButton';

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center mb-8'>
                <img
                    src='/icons/harukok-logo.svg'
                    alt='harukok-logo'
                    className='w-32 h-32'
                    style={{
                        animation: 'float 3s ease-in-out infinite',
                    }}
                />
                <p className='font-hakgyoansim text-4xl'>오늘의 일정을 콕</p>
            </div>

            <div className='flex flex-col gap-8'>
                <section className='flex flex-col gap-4'>
                    <Button onClick={() => navigate('/login/email')}>로그인</Button>
                    <Button variant='secondary' onClick={() => navigate('/todo')}>
                        회원가입
                    </Button>
                </section>

                <section className='flex flex-col gap-3'>
                    <p className='text-center text-[#b2b8c0]'>간편 로그인</p>
                    <KakaoLoginButton />
                </section>
            </div>

            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                `}
            </style>
        </div>
    );
};

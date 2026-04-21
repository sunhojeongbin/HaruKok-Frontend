import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/ui';

import { KakaoLoginButton } from '../../../features/social-login';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col justify-center px-4'>
      <div className='mb-8 flex flex-col items-center'>
        <img src='/icons/logo.svg' alt='logo' className='h-28 w-28' />
        <p className='font-hakgyoansim text-4xl'>오늘의 일정을 콕</p>
      </div>

      <div className='flex flex-col gap-8'>
        <section className='flex flex-col gap-4'>
          <Button onClick={() => navigate('/login/email')}>로그인</Button>
          <Button variant='filled' onClick={() => navigate('/signup/email')}>
            회원가입
          </Button>
        </section>

        <section className='flex flex-col gap-3'>
          <p className='text-center text-sm text-[#b2b8c0]'>간편 로그인</p>
          <KakaoLoginButton />
        </section>
      </div>
    </div>
  );
};

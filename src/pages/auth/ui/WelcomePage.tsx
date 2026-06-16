import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { Button } from '@shared/ui';

import { KakaoLoginButton } from '@features/social-login';

export const WelcomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col justify-center px-4'>
      <div className='mb-8 flex flex-col items-center'>
        <img src='/icons/logo.svg' alt='logo' className='h-28 w-28' />
        <p className='font-hakgyoansim text-4xl'>{t('auth.tagline')}</p>
      </div>

      <div className='flex flex-col gap-8'>
        <section className='flex flex-col gap-4'>
          <Button onClick={() => navigate('/auth/login')}>{t('auth.login')}</Button>
          <Button variant='outline' onClick={() => navigate('/auth/signup')}>
            {t('auth.signup')}
          </Button>
        </section>

        <section className='flex flex-col gap-3'>
          <p className='text-app-text-muted text-center text-sm'>{t('auth.socialLogin')}</p>
          <KakaoLoginButton />
        </section>
      </div>
    </div>
  );
};

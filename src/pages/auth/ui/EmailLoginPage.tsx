import { Link } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';

import { EmailLoginForm } from '@features/email-login';

import { SubLayout } from '@app/layouts';

export const EmailLoginPage = () => {
  const { t } = useTranslation();

  return (
    <SubLayout title={t('auth.emailLogin')}>
      <div className='flex flex-col gap-8'>
        <EmailLoginForm />

        <Link
          to='/password/reset'
          className='text-app-text-muted self-center text-sm font-medium hover:underline'
        >
          {t('auth.forgotPassword')}
        </Link>
      </div>
    </SubLayout>
  );
};

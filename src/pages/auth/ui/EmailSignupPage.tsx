import { useEffect } from 'react';

import { useTranslation } from '@shared/lib/i18n';

import { SignupSteps, useSignupStore } from '@features/email-signup';

import { SubLayout } from '@app/layouts';

export const EmailSignupPage = () => {
  const { t } = useTranslation();

  const { reset } = useSignupStore();

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <SubLayout title={t('auth.emailSignup')}>
      <SignupSteps />
    </SubLayout>
  );
};

import { useEffect } from 'react';

import { SignupSteps, useSignupStore } from '../../../features/email-signup';

import { SubLayout } from '../../../app/layouts';

export const EmailSignupPage = () => {
  const { reset } = useSignupStore();

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <SubLayout title='이메일 회원가입'>
      <SignupSteps />
    </SubLayout>
  );
};

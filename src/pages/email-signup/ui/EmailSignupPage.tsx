import { useEffect } from 'react';

import { SubLayout } from '../../../app/layouts';

import { useSignupStore } from '../../../features/email-signup/model/store';

import {
  EmailForm,
  StepIndicator,
  UserInfoForm,
  VerificationCodeForm,
} from '../../../features/email-signup/ui';

export const EmailSignupPage = () => {
  const { step, reset } = useSignupStore();

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <SubLayout title='이메일 회원가입'>
      <StepIndicator step={step} />

      {step === 'email' && <EmailForm />}
      {step === 'verificationCode' && <VerificationCodeForm />}
      {step === 'userInfo' && <UserInfoForm />}
    </SubLayout>
  );
};

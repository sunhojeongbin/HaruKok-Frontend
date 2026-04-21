import { useSignupStore } from '../model/store';
import { EmailForm } from './EmailForm';
import { StepIndicator } from './StepIndicator';
import { UserInfoForm } from './UserInfoForm';
import { VerificationCodeForm } from './VerificationCodeForm';

export const SignupSteps = () => {
  const { step } = useSignupStore();

  return (
    <>
      <StepIndicator step={step} />

      {step === 'email' && <EmailForm />}
      {step === 'verificationCode' && <VerificationCodeForm />}
      {step === 'userInfo' && <UserInfoForm />}
    </>
  );
};

import { SubHeader } from '../../../shared/ui';
import { EmailSignupForm } from '../../../features/email-signup/ui/EmailSignupForm';

export const EmailSignupPage = () => {
  return (
    <div className='px-4'>
      <SubHeader>이메일 회원가입</SubHeader>
      <EmailSignupForm />
    </div>
  );
};

import { SubHeader } from '../../../shared/ui';
import { EmailLoginForm } from '../../../features/email-login/ui/EmailLoginForm';

export const EmailLoginPage = () => {
  return (
    <div className='px-4'>
      <SubHeader>이메일 로그인</SubHeader>
      <EmailLoginForm />
    </div>
  );
};

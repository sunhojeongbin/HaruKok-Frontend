import { EmailLoginForm } from '../../../features/email-login/ui/EmailLoginForm';
import { SubHeader } from '../../../shared/ui';

export const EmailLoginPage = () => {
  return (
    <div className='flex flex-col p-4'>
      <SubHeader>이메일 로그인</SubHeader>
      <EmailLoginForm />
    </div>
  );
};

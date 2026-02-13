import { SubLayout } from '../../../app/layouts';

import { EmailLoginForm } from '../../../features/email-login/ui/EmailLoginForm';

export const EmailLoginPage = () => {
  return (
    <SubLayout title='이메일 로그인'>
      <EmailLoginForm />
    </SubLayout>
  );
};

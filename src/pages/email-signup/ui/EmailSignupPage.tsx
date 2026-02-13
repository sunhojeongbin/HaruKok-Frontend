import { SubLayout } from '../../../app/layouts';

import { EmailSignupForm } from '../../../features/email-signup/ui/EmailSignupForm';

export const EmailSignupPage = () => {
  return (
    <SubLayout title='이메일 회원가입'>
      <EmailSignupForm />
    </SubLayout>
  );
};

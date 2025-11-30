import { Header } from '../../../shared/ui';
import { EmailLoginForm } from '../../../features/email-login/ui/EmailLoginForm';

export const EmailLoginPage = () => {
    return (
        <div className='flex flex-col items-center pt-18'>
            <Header onBackClick={() => window.history.back()}>이메일 로그인</Header>
            <EmailLoginForm />
        </div>
    );
};

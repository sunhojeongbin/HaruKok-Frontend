import { useState } from 'react';

import { toast } from '../../../shared/ui/toast/store';
import { Button, Field, Input } from '../../../shared/ui';

import { useSignupStore } from '../model/store';
import { useVerifyEmail } from '../model/useVerifyEmail';

export const VerificationCodeForm = () => {
  const { email, setStep, setSignupToken } = useSignupStore();

  const { mutate: verifyEmail, isPending, error, reset } = useVerifyEmail();

  const [form, setForm] = useState({ code: '' });

  const maskedEmail = (email: string) => {
    const [local, domain] = email.split('@');

    return `${local.slice(0, 3)}***@${domain}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, code: e.target.value }));

    reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    verifyEmail(
      { email, code: form.code },
      {
        onSuccess: ({ signupToken }) => {
          setSignupToken(signupToken);
          setStep('userInfo');

          toast.success('이메일 인증이 완료됐어요.');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <Field
        label={
          <>
            <span className='underline'>{maskedEmail(email)}</span>로 인증번호를 전송했습니다.
          </>
        }
        htmlFor='signup-code'
        errorMessage={error?.message}
      >
        <Input
          type='number'
          id='signup-code'
          name='code'
          value={form.code}
          placeholder='인증번호 6자리를 입력해 주세요.'
          onChange={handleChange}
        />
      </Field>

      <Button type='submit' disabled={form.code.length !== 6} loading={isPending}>
        확인
      </Button>
    </form>
  );
};

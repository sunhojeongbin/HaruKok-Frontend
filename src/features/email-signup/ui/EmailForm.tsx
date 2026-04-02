import { useState } from 'react';

import { Button, Field, Input } from '../../../shared/ui';

import { useSignupStore } from '../model/store';
import { useSendEmail } from '../model/useSendEmail';

export const EmailForm = () => {
  const { setStep, setEmail } = useSignupStore();

  const { mutate: sendEmail, isPending, error, reset } = useSendEmail();

  const [form, setForm] = useState({ email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));

    reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    sendEmail(
      { email: form.email },
      {
        onSuccess: () => {
          setEmail(form.email);
          setStep('verificationCode');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <Field label='이메일' htmlFor='email' errorMessage={error?.message}>
        <Input
          type='email'
          id='email'
          name='email'
          value={form.email}
          placeholder='이메일을 입력해 주세요.'
          clearable
          onChange={handleChange}
        />
      </Field>

      <Button type='submit' disabled={!form.email} loading={isPending}>
        인증번호 전송
      </Button>
    </form>
  );
};

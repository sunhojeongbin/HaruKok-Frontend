import { useState } from 'react';

import { useTranslation } from '@shared/lib/i18n';
import { Button, EmailInput, Field } from '@shared/ui';

import { useSignupStore } from '../model/store';
import { useSendEmail } from '../model/useSendEmail';

export const EmailForm = () => {
  const { t } = useTranslation();

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
      <Field label={t('auth.email')} htmlFor='signup-email' errorMessage={error?.message}>
        <EmailInput
          id='signup-email'
          name='email'
          value={form.email}
          placeholder={t('auth.emailPlaceholder')}
          clearable
          onChange={handleChange}
        />
      </Field>

      <Button type='submit' disabled={!form.email} loading={isPending}>
        {t('auth.sendCode')}
      </Button>
    </form>
  );
};

import { useState } from 'react';

import { useTranslation } from '@shared/lib/i18n';
import { Button, EmailInput, Field, PasswordInput } from '@shared/ui';

import { useLogin } from '../model/useLogin';
import type { EmailLoginFormValues } from '../model/types';

export const EmailLoginForm = () => {
  const { t } = useTranslation();
  const { mutate: login, isPending, error, reset } = useLogin();

  const [form, setForm] = useState<EmailLoginFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    login(form);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <Field label={t('auth.email')} htmlFor='login-email'>
          <EmailInput
            id='login-email'
            name='email'
            value={form.email}
            placeholder={t('auth.emailPlaceholder')}
            clearable
            onChange={handleChange}
          />
        </Field>

        <Field label={t('auth.password')} htmlFor='login-password' errorMessage={error?.message}>
          <PasswordInput
            id='login-password'
            name='password'
            value={form.password}
            placeholder={t('auth.passwordPlaceholder')}
            onChange={handleChange}
          />
        </Field>
      </div>

      <Button type='submit' disabled={!form.email || !form.password} loading={isPending}>
        {t('auth.login')}
      </Button>
    </form>
  );
};

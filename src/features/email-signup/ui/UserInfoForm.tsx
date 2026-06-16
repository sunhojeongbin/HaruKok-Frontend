import { useState } from 'react';

import { useTranslation } from '@shared/lib/i18n';
import { useModalStore } from '@shared/ui/modal';
import { Button, Field, Input, PasswordInput } from '@shared/ui';

import { useSignupStore } from '../model/store';
import { useSignup } from '../model/useSignup';
import type { UserInfoFormValues } from '../model/types';

export const UserInfoForm = () => {
  const { t } = useTranslation();

  const { open: openModal } = useModalStore();
  const { email, signupToken, setStep } = useSignupStore();

  const { mutate: signup, isPending, error, reset } = useSignup();

  const [form, setForm] = useState<UserInfoFormValues>({
    password: '',
    name: '',
  });

  const isValidPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(form.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    signup({ email, password: form.password, name: form.name, signupToken });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <Field label={t('auth.email')} htmlFor='signup-info-email'>
          <Input
            type='email'
            id='signup-info-email'
            name='email'
            value={email}
            disabled
            rightElement={
              <button
                type='button'
                onClick={() =>
                  openModal({
                    title: t('auth.changeEmailTitle'),
                    description: t('auth.changeEmailDescription'),
                    confirmText: t('common.change'),
                    onConfirm: () => setStep('email'),
                  })
                }
                className='text-app-text-muted text-sm font-medium'
              >
                {t('common.change')}
              </button>
            }
          />
        </Field>

        <Field label={t('auth.password')} htmlFor='signup-password'>
          <PasswordInput
            id='signup-password'
            name='password'
            value={form.password}
            placeholder={t('auth.passwordPlaceholder')}
            showValidation
            onChange={handleChange}
          />
        </Field>

        <Field label={t('auth.name')} htmlFor='signup-name' errorMessage={error?.message}>
          <Input
            id='signup-name'
            name='name'
            value={form.name}
            placeholder={t('auth.namePlaceholder')}
            onChange={handleChange}
          />
        </Field>
      </div>

      <Button type='submit' disabled={!isValidPassword || !form.name} loading={isPending}>
        {t('auth.signup')}
      </Button>
    </form>
  );
};

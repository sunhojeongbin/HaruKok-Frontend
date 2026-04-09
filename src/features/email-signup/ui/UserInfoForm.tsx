import { useState } from 'react';

import { Button, Field, Input, PasswordInput } from '../../../shared/ui';

import type { UserInfoFormValues } from '../model/types';
import { useSignupStore } from '../model/store';
import { useSignup } from '../model/useSignup';

export const UserInfoForm = () => {
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
        <Field label='이메일' htmlFor='signup-info-email'>
          <Input
            type='email'
            id='signup-info-email'
            name='email'
            value={email}
            disabled
            rightElement={
              <button
                type='button'
                onClick={() => setStep('email')}
                className='text-sm font-medium text-[#b2b8c0]'
              >
                변경
              </button>
            }
          />
        </Field>

        <Field label='비밀번호' htmlFor='signup-password'>
          <PasswordInput
            id='signup-password'
            name='password'
            value={form.password}
            placeholder='비밀번호를 입력해 주세요.'
            showValidation
            onChange={handleChange}
          />
        </Field>

        <Field label='이름' htmlFor='signup-name' errorMessage={error?.message}>
          <Input
            id='signup-name'
            name='name'
            value={form.name}
            placeholder='이름을 입력해 주세요.'
            onChange={handleChange}
          />
        </Field>
      </div>

      <Button type='submit' disabled={!isValidPassword || !form.name} loading={isPending}>
        회원가입
      </Button>
    </form>
  );
};

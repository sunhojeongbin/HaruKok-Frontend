import { useState } from 'react';

import type { EmailLoginFormValues } from '../model/types';

import { useLogin } from '../model/useLogin';

import { Button, Field, Input, PasswordInput } from '../../../shared/ui';

export const EmailLoginForm = () => {
  const [form, setForm] = useState<EmailLoginFormValues>({
    email: '',
    password: '',
  });

  const { mutate: login, isPending, error, reset } = useLogin();

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
        <Field label='이메일' htmlFor='email'>
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

        <Field label='비밀번호' htmlFor='password' errorMessage={error?.message}>
          <PasswordInput
            id='password'
            name='password'
            value={form.password}
            placeholder='비밀번호를 입력해 주세요.'
            onChange={handleChange}
          />
        </Field>
      </div>

      <Button type='submit' disabled={!form.email || !form.password} loading={isPending}>
        로그인
      </Button>
    </form>
  );
};

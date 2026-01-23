import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Label } from '../../../shared/ui';

export const EmailLoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    if (email === 'test@gmail.com' && password === '1234') {
      navigate('/todo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <div>
          <Label htmlFor='email'>이메일</Label>
          <Input
            type='email'
            id='email'
            placeholder='이메일을 입력해 주세요.'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor='password'>비밀번호</Label>
          <Input
            type='password'
            id='password'
            placeholder='비밀번호를 입력해 주세요.'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button type='submit'>로그인</Button>
    </form>
  );
};

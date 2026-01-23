import { Button, Input, Label } from '../../../shared/ui';

export const EmailSignupForm = () => {
  return (
    <form className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <div>
          <Label htmlFor='email'>이메일</Label>
          <Input type='email' id='email' placeholder='이메일을 입력해 주세요.' />
        </div>
        <div>
          <Label htmlFor='password'>비밀번호</Label>
          <Input type='password' id='password' placeholder='비밀번호를 입력해 주세요.' />
        </div>
        <div>
          <Label htmlFor='name'>이름</Label>
          <Input id='name' placeholder='이름을 입력해 주세요.' />
        </div>
      </div>
      <Button type='submit'>회원가입</Button>
    </form>
  );
};

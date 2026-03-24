import { useState } from 'react';

import { Icon } from './Icon';
import { Input } from './Input';

interface PasswordInputProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  showValidation?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({
  id,
  name,
  value = '',
  placeholder,
  disabled = false,
  showValidation = false,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isValid = (value: string) =>
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(value);

  return (
    <div className='flex flex-col gap-1.5'>
      <Input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        clearable
        rightElement={
          !!value && (
            <button
              type='button'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <Icon name={showPassword ? 'Eye' : 'EyeOff'} color='#b2b8c0' />
            </button>
          )
        }
        onChange={onChange}
      />

      {showValidation && (
        <p
          className={`flex items-center gap-1 text-xs ${
            !value ? 'text-[#b2b8c0]' : isValid(value) ? 'text-[#48cc27]' : 'text-[#f04452]'
          }`}
        >
          <Icon name={value && !isValid(value) ? 'X' : 'Check'} size={14} />
          8~20자로 영문자, 숫자, 특수문자를 각 1자 이상 포함하여 입력해 주세요.
        </p>
      )}
    </div>
  );
};

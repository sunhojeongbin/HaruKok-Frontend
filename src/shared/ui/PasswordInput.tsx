import { useState } from 'react';

import { Icon } from './Icon';
import { Input } from './Input';

interface PasswordInputProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({
  id,
  name,
  value,
  placeholder,
  disabled = false,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
            <Icon name={showPassword ? 'Eye' : 'EyeOff'} />
          </button>
        )
      }
      onChange={onChange}
    />
  );
};

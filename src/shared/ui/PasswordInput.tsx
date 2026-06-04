import { useState } from 'react';

import { useTranslation } from '../lib/i18n';

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
  const { t } = useTranslation();

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
              <Icon name={showPassword ? 'Eye' : 'EyeOff'} color='var(--app-color-text-muted)' />
            </button>
          )
        }
        onChange={onChange}
      />

      {showValidation && (
        <p
          className={`flex items-center gap-1 text-xs ${
            !value ? 'text-app-text-muted' : isValid(value) ? 'text-app-success' : 'text-app-danger'
          }`}
        >
          <Icon name={value && !isValid(value) ? 'X' : 'Check'} size={14} />
          {t('password.validation')}
        </p>
      )}
    </div>
  );
};

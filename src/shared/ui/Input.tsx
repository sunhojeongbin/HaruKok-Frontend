import { useRef, useState } from 'react';

import { Icon } from './Icon';

interface InputProps {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  rightElement?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  required,
  disabled,
  clearable = false,
  rightElement,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange?.({ target: { name, value: '' } } as React.ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };

  return (
    <div className='flex h-12 w-full items-center gap-1 rounded-xl bg-[#f3f4f6] px-4 focus-within:bg-white focus-within:ring-1 focus-within:ring-[#1ea958]'>
      <input
        ref={inputRef}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='min-w-0 flex-1 bg-transparent placeholder:text-sm focus:outline-none disabled:cursor-not-allowed'
      />

      <div className='flex items-center gap-1'>
        {rightElement}

        {clearable && isFocused && !!value && !disabled && (
          <button
            type='button'
            aria-label='Clear input'
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleClear}
          >
            <Icon name='XCircle' />
          </button>
        )}
      </div>
    </div>
  );
};

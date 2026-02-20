import { useRef, useState } from 'react';

import { Icon } from './Icon';

interface IInputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', id, placeholder, value, onChange }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };

  return (
    <div className='flex h-12 w-full items-center gap-1 rounded-lg bg-[#f3f4f6] px-4 focus-within:bg-white focus-within:ring-1 focus-within:ring-[#aad1f0]'>
      <input
        ref={inputRef}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='flex-1 bg-transparent placeholder:text-sm focus:outline-none'
      />

      {isFocused && !!value && (
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
  );
};

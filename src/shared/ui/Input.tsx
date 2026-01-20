interface IInputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', id, placeholder, value, onChange }: IInputProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='h-12 w-full rounded-lg bg-[#f3f4f6] p-4 placeholder:text-sm focus:bg-white focus:ring-1 focus:ring-[#aad1f0] focus:outline-none'
    />
  );
};

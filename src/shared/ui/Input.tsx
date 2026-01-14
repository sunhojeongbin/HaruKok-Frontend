interface IInputProps {
  type: string;
  id?: string;
  placeholder?: string;
}

export const Input = ({ type, id, placeholder }: IInputProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className='h-12 w-full rounded-lg bg-[#f3f4f6] p-4 placeholder:text-sm focus:bg-white focus:ring-1 focus:ring-[#aad1f0] focus:outline-none'
    />
  );
};

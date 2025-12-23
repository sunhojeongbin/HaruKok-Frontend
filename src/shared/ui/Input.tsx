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
      className='w-full h-12 p-4 rounded-lg bg-[#f3f4f6] placeholder:text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#aad1f0]'
    />
  );
};

interface ILabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className='block text-left mb-2 text-sm'>
      {children}
    </label>
  );
};

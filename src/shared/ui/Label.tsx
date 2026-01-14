interface ILabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className='mb-2 block text-left text-sm'>
      {children}
    </label>
  );
};

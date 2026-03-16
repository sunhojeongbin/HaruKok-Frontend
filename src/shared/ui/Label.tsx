interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='mb-1.5 block text-sm font-medium'>
      {children}
    </label>
  );
};

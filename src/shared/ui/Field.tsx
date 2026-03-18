import { Label } from './Label';

interface FieldProps {
  children: React.ReactNode;
  label?: string;
  htmlFor?: string;
  errorMessage?: string;
}

export const Field = ({ children, label, htmlFor, errorMessage }: FieldProps) => {
  return (
    <div className='flex flex-col gap-1.5'>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}

      {children}

      {errorMessage && <p className='text-xs text-[#f04452]'>{errorMessage}</p>}
    </div>
  );
};

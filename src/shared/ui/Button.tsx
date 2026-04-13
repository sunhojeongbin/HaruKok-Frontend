type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'solid' | 'neutral' | 'filled' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'button',
  variant = 'solid',
  disabled,
  loading,
  onClick,
}: ButtonProps) => {
  const buttonClasses = {
    root: 'flex h-12 w-full items-center justify-center rounded-xl font-medium',
    solid: 'bg-[#1ea958] text-white',
    neutral: 'bg-[#f3f4f6]',
    filled: 'bg-[#1ea95833] text-[#1ea958]',
    danger: 'bg-[#f3f4f6] text-[#f04452]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${buttonClasses.root} ${disabled ? 'cursor-not-allowed bg-[#edf0f7] text-[#b2b8c0]' : buttonClasses[variant]}`}
    >
      {loading ? (
        <span className='flex gap-1'>
          <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]' />
          <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]' />
          <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-current' />
        </span>
      ) : (
        children
      )}
    </button>
  );
};

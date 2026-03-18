type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'solid' | 'filled';

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
    root: 'flex h-12 w-full items-center justify-center rounded-lg font-medium',
    solid: 'bg-[#aad1f0] text-white',
    filled: 'bg-[#aad1f033] text-[#aad1f0]',
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

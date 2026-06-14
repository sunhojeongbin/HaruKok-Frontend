type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'solid' | 'neutral' | 'outline' | 'danger';

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
    solid: 'bg-app-primary text-app-primary-foreground',
    neutral: 'bg-app-muted',
    outline: 'text-app-primary border border-app-primary',
    danger: 'bg-app-muted text-app-danger',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${buttonClasses.root} ${disabled ? 'bg-app-disabled text-app-text-muted cursor-not-allowed' : buttonClasses[variant]}`}
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

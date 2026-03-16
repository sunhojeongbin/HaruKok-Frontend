type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'solid' | 'filled';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'button',
  variant = 'solid',
  disabled,
  onClick,
}: ButtonProps) => {
  const buttonClasses = {
    root: 'h-12 w-full rounded-lg font-medium',
    solid: 'bg-[#aad1f0] text-white',
    filled: 'bg-[#aad1f033] text-[#aad1f0]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses.root} ${disabled ? 'cursor-not-allowed bg-[#edf0f7] text-[#b2b8c0]' : buttonClasses[variant]}`}
    >
      {children}
    </button>
  );
};

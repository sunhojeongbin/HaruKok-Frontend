type TButtonType = 'button' | 'submit' | 'reset';
type TButtonVariant = 'solid' | 'filled';

interface IButtonProps {
  children: React.ReactNode;
  type?: TButtonType;
  variant?: TButtonVariant;
  onClick?: () => void;
}

export const Button = ({ children, type = 'button', variant = 'solid', onClick }: IButtonProps) => {
  const buttonClasses = {
    root: 'h-12 w-full rounded-lg font-medium',
    solid: 'bg-[#aad1f0] text-[#ffffff]',
    filled: 'bg-[#aad1f033] text-[#aad1f0]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClasses.root} ${buttonClasses[variant]}`}
    >
      {children}
    </button>
  );
};

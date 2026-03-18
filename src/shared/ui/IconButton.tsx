import { Icon, type IconName } from './Icon';

interface IconButtonProps {
  icon: IconName;
  iconSize?: number;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton = ({ icon, iconSize = 24, color, disabled, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='disabled:cursor-not-allowed disabled:opacity-50'
    >
      <Icon name={icon} size={iconSize} color={color} />
    </button>
  );
};

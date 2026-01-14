import { Icon, type TIconName } from './Icon';

interface IIconButtonProps {
  icon: TIconName;
  size?: number;
  onClick: () => void;
}

export const IconButton = ({ icon, size = 24, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon name={icon} size={size} />
    </button>
  );
};

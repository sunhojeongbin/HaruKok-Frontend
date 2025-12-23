import { Icon, type TIconName } from './Icon';

interface IIconButtonProps {
  icon: TIconName;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon name={icon} size={24} />
    </button>
  );
};

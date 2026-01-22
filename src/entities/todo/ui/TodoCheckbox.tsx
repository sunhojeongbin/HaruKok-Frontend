import { IconButton } from '../../../shared/ui';

interface ITodoCheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export const TodoCheckbox = ({ checked, onToggle }: ITodoCheckboxProps) => {
  return <IconButton icon={checked ? 'CheckCircle' : 'Circle'} onClick={onToggle} />;
};

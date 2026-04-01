import { Icon } from '../../../shared/ui';

interface TodoCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
}

export const TodoCheckbox = ({ checked, disabled, onToggle }: TodoCheckboxProps) => {
  return (
    <button
      type='button'
      onClick={onToggle}
      disabled={disabled}
      className='flex h-6 w-6 items-center justify-center'
    >
      <Icon name={checked ? 'CheckCircle' : 'Circle'} />
    </button>
  );
};

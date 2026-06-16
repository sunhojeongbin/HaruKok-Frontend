import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { IconButton } from '@shared/ui';

interface SubHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  onPlus?: () => void;
  onSubmit?: () => void;
}

export const SubHeader = ({ children, disabled, onPlus, onSubmit }: SubHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className='grid h-14 shrink-0 grid-cols-3 items-center px-4'>
      <div className='flex items-center'>
        <IconButton icon='ArrowLeft' onClick={() => navigate(-1)} />
      </div>

      <div className='text-center font-semibold'>{children}</div>

      <div className='flex justify-end'>
        {onPlus && <IconButton icon='Plus' onClick={onPlus} />}

        {onSubmit && (
          <button
            type='button'
            onClick={onSubmit}
            disabled={disabled}
            className='disabled:text-app-text-muted px-2 text-sm font-medium'
          >
            {t('common.done')}
          </button>
        )}
      </div>
    </header>
  );
};

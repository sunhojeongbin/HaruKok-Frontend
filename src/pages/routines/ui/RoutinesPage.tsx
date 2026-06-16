import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@shared/lib/i18n';
import { useModalStore } from '@shared/ui/modal';

import { useCategories } from '@entities/category';

import { RoutineList } from '@widgets/routine-list';

import { SubLayout } from '@app/layouts';

export const RoutinesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { open: openModal } = useModalStore();

  const { data: categories = [] } = useCategories();

  const handleCreate = () => {
    if (categories.length === 0) {
      openModal({
        title: t('routine.categoryRequiredTitle'),
        description: t('routine.categoryRequiredDescription'),
        confirmText: t('routine.categoryRequiredConfirm'),
        onConfirm: () => navigate('/categories/new'),
      });

      return;
    }

    // 루틴 추가 페이지로 이동
    navigate('/routines/new');
  };

  return (
    <SubLayout title={t('routine.management')} onPlus={handleCreate}>
      <RoutineList />
    </SubLayout>
  );
};

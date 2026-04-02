import { useNavigate } from 'react-router-dom';

import { SubLayout } from '../../../app/layouts';

import { RoutineList } from '../../../widgets/routine-list/ui/RoutineList';

export const RoutinePage = () => {
  const navigate = useNavigate();

  return (
    <SubLayout title='루틴 관리' onPlus={() => navigate('/routines/new')}>
      <RoutineList />
    </SubLayout>
  );
};

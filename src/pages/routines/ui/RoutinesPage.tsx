import { useNavigate } from 'react-router-dom';

import { RoutineList } from '../../../widgets/routine-list';

import { SubLayout } from '../../../app/layouts';

export const RoutinesPage = () => {
  const navigate = useNavigate();

  return (
    <SubLayout title='루틴 관리' onPlus={() => navigate('/routines/new')}>
      <RoutineList />
    </SubLayout>
  );
};

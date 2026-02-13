import { SubHeader } from '../../shared/ui';

interface ISubLayoutProps {
  title: string;
  children: React.ReactNode;
}

// TODO: iOS 웹뷰에서 키보드가 올라올 때 레이아웃 깨짐 이슈 해결
export const SubLayout = ({ title, children }: ISubLayoutProps) => {
  return (
    <div className='flex h-screen flex-col'>
      <SubHeader>{title}</SubHeader>
      <main className='flex-1 overflow-y-auto overscroll-none px-4 pt-4'>{children}</main>
    </div>
  );
};

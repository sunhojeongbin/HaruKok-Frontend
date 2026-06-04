import { SubHeader } from '@shared/ui';

interface SubLayoutProps {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  onPlus?: () => void;
  onSubmit?: () => void;
}

// TODO: iOS 웹뷰에서 키보드가 올라올 때 레이아웃 깨짐 이슈 해결
export const SubLayout = ({ title, children, disabled, onPlus, onSubmit }: SubLayoutProps) => {
  return (
    <div className='flex h-screen flex-col'>
      <SubHeader disabled={disabled} onPlus={onPlus} onSubmit={onSubmit}>
        {title}
      </SubHeader>
      <main className='flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-none p-4'>
        {children}
      </main>
    </div>
  );
};

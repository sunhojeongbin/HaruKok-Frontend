import { Icon } from '../../../shared/ui';

import type { Step } from '../model/types';

const STEPS: { key: Step; label: string }[] = [
  { key: 'email', label: '이메일' },
  { key: 'verificationCode', label: '인증번호' },
  { key: 'userInfo', label: '정보' },
];

export const StepIndicator = ({ step }: { step: Step }) => {
  const currentIndex = STEPS.findIndex((s) => s.key === step);

  return (
    <div className='mb-9 flex'>
      {STEPS.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div
            key={step.key}
            className={`flex items-center ${index !== STEPS.length - 1 ? 'flex-1' : ''}`}
          >
            <div className='relative flex flex-col items-center'>
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  isCompleted || isActive
                    ? 'bg-[#aad1f0] text-white'
                    : 'bg-[#f3f4f6] text-[#b2b8c0]'
                } `}
              >
                {isCompleted ? <Icon name='Check' size={16} /> : index + 1}
              </div>
              <span
                className={`absolute -bottom-5 text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? 'font-semibold text-[#313131]'
                    : `font-medium ${isCompleted ? 'text-[#313131]' : 'text-[#b2b8c0]'}`
                }`}
              >
                {step.label}
              </span>
            </div>

            {index !== STEPS.length - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 transition-colors ${isCompleted ? 'bg-[#aad1f0]' : 'bg-[#f3f4f6]'}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

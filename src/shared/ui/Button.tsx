import { useCallback } from 'react';

/** @description 버튼의 스타일 변형 타입 정의 */
type TVariant = 'primary' | 'secondary';

/**
 * @description 버튼 컴포넌트 Props 인터페이스
 * @field children - 버튼 내부에 표시될 내용
 * @field variant - 버튼의 스타일 변형 (기본값: 'primary')
 * @field onClick - 버튼 클릭 시 호출될 함수
 */
interface IButtonProps {
    children: React.ReactNode;
    variant?: TVariant;
    onClick: () => void;
}

/** @description 버튼 컴포넌트 */
export const Button = ({ children, variant = 'primary', onClick }: IButtonProps) => {
    const baseClassName = 'w-80 h-12 rounded-lg text-lg font-[500]'; // 기본 클래스

    /** @description 버튼의 스타일 변형에 따른 클래스 이름을 반환하는 함수 */
    const getVariantClassName = useCallback(() => {
        if (variant === 'primary') {
            return 'bg-[#aad1f0] text-[#ffffff]';
        } else if (variant === 'secondary') {
            return 'bg-[rgba(170,209,240,0.2)] text-[#aad1f0]';
        }

        return '';
    }, [variant]);

    return (
        <button className={`${baseClassName} ${getVariantClassName()}`} onClick={onClick}>
            {children}
        </button>
    );
};

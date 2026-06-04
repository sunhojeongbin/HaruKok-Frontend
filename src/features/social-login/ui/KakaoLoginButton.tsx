import { useTranslation } from '@shared/lib/i18n';

import kakaoSymbol from '../assets/icons/kakao-symbol.svg';

export const KakaoLoginButton = () => {
  const { t } = useTranslation();

  return (
    <button
      type='button'
      className='bg-app-kakao flex h-12 w-full items-center justify-center rounded-xl font-medium text-black/85'
    >
      <img src={kakaoSymbol} alt='Kakao' className='mr-2 h-5 w-5' />
      {t('auth.kakaoLogin')}
    </button>
  );
};

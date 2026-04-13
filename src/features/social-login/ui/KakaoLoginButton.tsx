import kakaoSymbol from '../assets/icons/kakao-symbol.svg';

export const KakaoLoginButton = () => {
  return (
    <button
      type='button'
      className='flex h-12 w-full items-center justify-center rounded-xl bg-[#fee500] font-medium text-[rgb(0,0,0,85)]'
    >
      <img src={kakaoSymbol} alt='카카오' className='mr-2 h-5 w-5' />
      카카오 로그인
    </button>
  );
};

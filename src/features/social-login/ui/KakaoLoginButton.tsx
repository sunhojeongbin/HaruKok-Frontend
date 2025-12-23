import kakaoSymbol from '../assets/icons/kakao-symbol.svg';

export const KakaoLoginButton = () => {
  return (
    <button className='flex items-center justify-center w-full h-12 rounded-lg bg-[#fee500] text-[rgb(0,0,0,85)] font-[500]'>
      <img src={kakaoSymbol} alt='카카오' className='w-5 h-5 mr-2' />
      카카오 로그인
    </button>
  );
};

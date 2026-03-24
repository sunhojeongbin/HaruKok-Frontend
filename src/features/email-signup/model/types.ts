export type Step = 'email' | 'verificationCode' | 'userInfo';

interface SignupState {
  step: Step;
  email: string;
  signupToken: string;
}

interface SignupActions {
  setStep: (step: Step) => void;
  setEmail: (email: string) => void;
  setSignupToken: (token: string) => void;
  reset: () => void;
}

export type SignupStore = SignupState & SignupActions;

export interface UserInfoFormValues {
  password: string;
  name: string;
}

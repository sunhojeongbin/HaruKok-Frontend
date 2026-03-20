export type Step = 'email' | 'verificationCode' | 'userInfo';

interface SignupState {
  step: Step;
  email: string;
}

interface SignupActions {
  setStep: (step: Step) => void;
  setEmail: (email: string) => void;
  reset: () => void;
}

export type SignupStore = SignupState & SignupActions;

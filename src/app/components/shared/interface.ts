export interface Plan {
  image: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface AddOn {
  id: number;
  heading: string;
  subHeading: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface SidePanelItem {
  id: number;
  name: string;
  active: boolean;
}

export interface Stepper1Details {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Stepper2Details {
  plan: Plan;
  isYearly: boolean;
}

export interface Stepper3Details {
  addOns: AddOn[];
}

export interface InitialState {
  currentStepper: number;
  heading: string;
  subHeading: string;
  name: string;
  email: string;
  phoneNumber: string;
  plan: Plan;
  isYearly: boolean;
  addOns: AddOn[];
}

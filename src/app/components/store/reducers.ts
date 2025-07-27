import { createReducer, on } from '@ngrx/store';
import {
  incrementStepper,
  decrementStepper,
  changeHeading,
  changeSubHeading,
  addStepper1Details,
  addStepper2Details,
  addStepper3Details,
  setStepper,
} from './actions';

import {
  InitialState,
  Stepper1Details,
  Stepper2Details,
  Stepper3Details,
} from '../shared/interface';

export const initialState: InitialState = {
  currentStepper: 1,
  heading: 'Personal info',
  subHeading: 'Please provide your name, email address, and phone number.',
  name: '',
  email: '',
  phoneNumber: '',
  plan: {
    image: '',
    name: '',
    price: {
      monthly: 0,
      yearly: 0,
    },
  },
  isYearly: false,
  addOns: [],
};

export const reducer = createReducer(
  initialState,
  on(
    incrementStepper,
    (state): InitialState => ({
      ...state,
      currentStepper: state.currentStepper + 1,
    })
  ),
  on(
    decrementStepper,
    (state): InitialState => ({
      ...state,
      currentStepper: state.currentStepper - 1,
    })
  ),
  on(
    setStepper,
    (state, { stepper }): InitialState => ({
      ...state,
      currentStepper: stepper,
    })
  ),
  on(
    changeHeading,
    (state, { newHeading }): InitialState => ({
      ...state,
      heading: newHeading,
    })
  ),
  on(
    changeSubHeading,
    (state, { newSubHeading }): InitialState => ({
      ...state,
      subHeading: newSubHeading,
    })
  ),
  on(
    addStepper1Details,
    (state, { name, email, phoneNumber }: Stepper1Details): InitialState => ({
      ...state,
      name,
      email,
      phoneNumber,
    })
  ),
  on(
    addStepper2Details,
    (state, { plan, isYearly }: Stepper2Details): InitialState => ({
      ...state,
      plan,
      isYearly,
    })
  ),
  on(
    addStepper3Details,
    (state, { addOns }: Stepper3Details): InitialState => ({
      ...state,
      addOns,
    })
  )
);

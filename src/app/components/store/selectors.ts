import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  InitialState,
  Stepper1Details,
  Stepper2Details,
  Stepper3Details,
} from '../shared/interface';

export const storeSelector =
  createFeatureSelector<InitialState>('multiStepFormData');

export const currentStepperSelector = createSelector(
  storeSelector,
  (state) => state.currentStepper
);

export const headingSelector = createSelector(
  storeSelector,
  (state) => state.heading
);

export const subHeadingSelector = createSelector(
  storeSelector,
  (state) => state.subHeading
);

export const stepper1DetailsSelector = createSelector(
  storeSelector,
  ({ name, email, phoneNumber }): Stepper1Details => ({
    name,
    email,
    phoneNumber,
  })
);

export const stepper2DetailsSelector = createSelector(
  storeSelector,
  ({ plan, isYearly }): Stepper2Details => ({ plan, isYearly })
);

export const stepper3DetailsSelector = createSelector(
  storeSelector,
  ({ addOns }): Stepper3Details => ({ addOns })
);

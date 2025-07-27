import { createAction, props } from '@ngrx/store';
import {
  Stepper1Details,
  Stepper2Details,
  Stepper3Details,
} from '../shared/interface';

export const incrementStepper = createAction('[Stepper] increment');

export const decrementStepper = createAction('[Stepper] decrement');

export const setStepper = createAction(
  '[Stepper] set stepper',
  props<{ stepper: number }>()
);

export const changeHeading = createAction(
  '[Stepper] change heading',
  props<{ newHeading: string }>()
);

export const changeSubHeading = createAction(
  '[Stepper] change subHeading',
  props<{ newSubHeading: string }>()
);

export const addStepper1Details = createAction(
  '[Stepper] add stepper 1 details',
  props<Stepper1Details>()
);

export const addStepper2Details = createAction(
  '[Stepper] add stepper 2 details',
  props<Stepper2Details>()
);

export const addStepper3Details = createAction(
  '[Stepper] add stepper 3 details',
  props<Stepper3Details>()
);

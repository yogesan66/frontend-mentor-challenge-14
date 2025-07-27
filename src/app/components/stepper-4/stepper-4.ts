import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  stepper2DetailsSelector,
  stepper3DetailsSelector,
} from '../store/selectors';
import {
  changeHeading,
  changeSubHeading,
  incrementStepper,
  setStepper,
} from '../store/actions';
import { HEADING_2, SUBHEADING_2 } from '../shared/contants';
import { CommonModule } from '@angular/common';
import {
  AddOn,
  InitialState,
  Plan,
  Stepper2Details,
  Stepper3Details,
} from '../shared/interface';

@Component({
  selector: 'app-stepper-4',
  imports: [CommonModule],
  templateUrl: './stepper-4.html',
  styleUrl: './stepper-4.scss',
})
export class Stepper4 {
  planDetails!: Plan;
  isYearly: boolean = false;
  addOns: AddOn[] = [];
  total: number = 0;

  constructor(private store: Store<InitialState>) {
    this.store
      .select(stepper2DetailsSelector)
      .subscribe((details: Stepper2Details) => {
        this.planDetails = details.plan;
        this.isYearly = details.isYearly;
        this.calculateSum();
      });
    this.store
      .select(stepper3DetailsSelector)
      .subscribe((details: Stepper3Details) => {
        this.addOns = details.addOns;
        this.calculateSum();
      });
  }

  calculateSum(): void {
    const addOns =
      this.addOns?.map((res: any) =>
        this.isYearly ? res.price.yearly : res.price.monthly
      ) || [];
    this.total = [
      this.isYearly
        ? this.planDetails.price.yearly
        : this.planDetails.price.monthly,
      ...addOns,
    ].reduce((acc, cur) => acc + cur, 0);
  }

  changePlan(): void {
    this.store.dispatch(setStepper({ stepper: 2 }));
    this.store.dispatch(changeHeading({ newHeading: HEADING_2 }));
    this.store.dispatch(changeSubHeading({ newSubHeading: SUBHEADING_2 }));
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addStepper2Details,
  changeHeading,
  changeSubHeading,
  incrementStepper,
} from '../store/actions';
import { stepper2DetailsSelector } from '../store/selectors';
import { HEADING_3, PLAN_LIST, SUBHEADING_3 } from '../shared/contants';
import { InitialState, Plan, Stepper2Details } from '../shared/interface';

@Component({
  selector: 'app-stepper-2',
  imports: [CommonModule, FormsModule],
  templateUrl: './stepper-2.html',
  styleUrl: './stepper-2.scss',
})
export class Stepper2 implements OnInit {
  selectedPlan: Plan | null = null;
  isYearly: boolean = false;
  planList: Plan[] = PLAN_LIST;

  constructor(
    private store: Store<InitialState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.store
      .select(stepper2DetailsSelector)
      .subscribe((details: Stepper2Details) => {
        this.isYearly = details.isYearly;
        this.selectedPlan = details.plan;
        this.cdr.detectChanges();
      });
  }

  setPlan(plan: Plan): void {
    this.selectedPlan = plan;
  }

  submit(): void {
    if (this.selectedPlan && this.selectedPlan.name) {
      this.store.dispatch(
        addStepper2Details({ plan: this.selectedPlan, isYearly: this.isYearly })
      );
      this.store.dispatch(incrementStepper());
      this.store.dispatch(changeHeading({ newHeading: HEADING_3 }));
      this.store.dispatch(changeSubHeading({ newSubHeading: SUBHEADING_3 }));
    } else {
      alert('Kindly select a plan to continue');
    }
  }
}

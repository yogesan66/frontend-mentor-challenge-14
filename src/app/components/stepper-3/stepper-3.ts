import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_ONS_LIST, HEADING_4, SUBHEADING_4 } from '../shared/contants';
import {
  addStepper3Details,
  incrementStepper,
  changeHeading,
  changeSubHeading,
} from '../store/actions';
import {
  stepper2DetailsSelector,
  stepper3DetailsSelector,
} from '../store/selectors';
import {
  AddOn,
  InitialState,
  Stepper2Details,
  Stepper3Details,
} from '../shared/interface';

@Component({
  selector: 'app-stepper-3',
  imports: [CommonModule],
  templateUrl: './stepper-3.html',
  styleUrl: './stepper-3.scss',
})
export class Stepper3 implements OnInit {
  addOnsList: AddOn[] = ADD_ONS_LIST;
  selectedAddOns: AddOn[] = [];
  isYearly: boolean = false;

  constructor(
    private store: Store<InitialState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.store
      .select(stepper3DetailsSelector)
      .subscribe((details: Stepper3Details) => {
        this.selectedAddOns = details.addOns ?? [];
        this.cdr.detectChanges();
      });
    this.store
      .select(stepper2DetailsSelector)
      .subscribe((details: Stepper2Details) => {
        this.isYearly = details.isYearly;
      });
  }

  handleAddOns(addOn: AddOn): void {
    const exists = this.selectedAddOns.some((a: AddOn) => a.id === addOn.id);
    if (!exists) {
      this.selectedAddOns = [...this.selectedAddOns, addOn];
    } else {
      this.selectedAddOns = this.selectedAddOns.filter(
        (a: AddOn) => a.id !== addOn.id
      );
    }
  }

  isAddOnSelected(item: AddOn): boolean {
    return this.selectedAddOns.some((a: AddOn) => a.id === item.id);
  }

  submit() {
    this.store.dispatch(addStepper3Details({ addOns: this.selectedAddOns }));
    this.store.dispatch(incrementStepper());
    this.store.dispatch(changeHeading({ newHeading: HEADING_4 }));
    this.store.dispatch(changeSubHeading({ newSubHeading: SUBHEADING_4 }));
  }
}

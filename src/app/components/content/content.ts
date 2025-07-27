import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Stepper1 } from '../stepper-1/stepper-1';
import { Stepper2 } from '../stepper-2/stepper-2';
import { Stepper3 } from '../stepper-3/stepper-3';
import { Stepper4 } from '../stepper-4/stepper-4';
import { Stepper5 } from '../stepper-5/stepper-5';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Store } from '@ngrx/store';
import { currentStepperSelector } from '../store/selectors';
import {
  changeHeading,
  decrementStepper,
  incrementStepper,
} from '../store/actions';
import { STEPPER_HEADINGS } from '../shared/contants';
import { InitialState } from '../shared/interface';

@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Stepper1,
    Stepper2,
    Stepper3,
    Stepper4,
    Stepper5,
    Footer,
    Header,
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  currentStepper: number = 1;

  @ViewChild('stepper1', { static: false }) stepper1!: Stepper1;
  @ViewChild('stepper2', { static: false }) stepper2!: Stepper2;
  @ViewChild('stepper3', { static: false }) stepper3!: Stepper3;

  constructor(private store: Store<InitialState>) {
    this.store.select(currentStepperSelector).subscribe((count: number) => {
      this.currentStepper = count;
    });
  }

  nextStep(): void {
    switch (this.currentStepper) {
      case 1:
        this.stepper1.submit();
        break;
      case 2:
        this.stepper2.submit();
        break;
      case 3:
        this.stepper3.submit();
        break;
      case 4:
        this.store.dispatch(incrementStepper());
        break;
    }
  }

  goBack(): void {
    this.store.dispatch(decrementStepper());
    this.store.dispatch(
      changeHeading({ newHeading: STEPPER_HEADINGS[this.currentStepper] })
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addStepper1Details,
  changeHeading,
  incrementStepper,
  changeSubHeading,
} from '../store/actions';
import { HEADING_2, SUBHEADING_2 } from '../shared/contants';
import { stepper1DetailsSelector } from '../store/selectors';
import { InitialState, Stepper1Details } from '../shared/interface';

@Component({
  selector: 'app-stepper-1',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './stepper-1.html',
  styleUrl: './stepper-1.scss',
})
export class Stepper1 implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<InitialState>) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+\d{1,3} ?\d{3} ?\d{3} ?\d{3,4}$/),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.store
      .select(stepper1DetailsSelector)
      .subscribe((details: Stepper1Details) => {
        this.form.patchValue(details);
      });
  }

  get f(): { [key: string]: AbstractControl<any, any> } {
    return this.form.controls;
  }

  submit(): void {
    const { name, email, phoneNumber } = this.form.value;
    if (this.form.valid) {
      this.store.dispatch(addStepper1Details({ name, email, phoneNumber }));
      this.store.dispatch(incrementStepper());
      this.store.dispatch(changeHeading({ newHeading: HEADING_2 }));
      this.store.dispatch(changeSubHeading({ newSubHeading: SUBHEADING_2 }));
    }
  }
}

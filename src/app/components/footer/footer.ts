import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentStepperSelector } from '../store/selectors';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private store = inject(Store);
  currentStepper$ = this.store.select(currentStepperSelector);

  @Output() nextStepEvent = new EventEmitter();
  @Output() goBackEvent = new EventEmitter();

  nextStep(): void {
    this.nextStepEvent.emit();
  }

  goBack(): void {
    this.goBackEvent.emit();
  }
}

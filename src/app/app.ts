import { Component } from '@angular/core';
import { SidePanel } from './components/side-panel/side-panel';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import { Store } from '@ngrx/store';
import { currentStepperSelector } from './components/store/selectors';
import { CommonModule } from '@angular/common';
import { InitialState } from './components/shared/interface';

@Component({
  selector: 'app-root',
  imports: [SidePanel, Content, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  currentStepper: number = 0;

  constructor(private store: Store<InitialState>) {
    this.store
      .select(currentStepperSelector)
      .subscribe((res) => (this.currentStepper = res));
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { headingSelector, subHeadingSelector } from '../store/selectors';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private store = inject(Store);
  heading$ = this.store.select(headingSelector);
  subHeading$ = this.store.select(subHeadingSelector);
}

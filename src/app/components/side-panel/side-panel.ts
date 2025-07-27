import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { currentStepperSelector } from '../store/selectors';
import { SIDE_PANEL_LIST } from '../shared/contants';
import { InitialState, SidePanelItem } from '../shared/interface';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.scss',
})
export class SidePanel {
  sidePanelList: SidePanelItem[] = SIDE_PANEL_LIST;

  constructor(private store: Store<InitialState>) {
    this.store.select(currentStepperSelector).subscribe((count: number) => {
      if (count <= this.sidePanelList.length) {
        this.sidePanelList = this.sidePanelList.map((i: any) =>
          i.id === count ? { ...i, active: true } : { ...i, active: false }
        );
      }
    });
  }
}

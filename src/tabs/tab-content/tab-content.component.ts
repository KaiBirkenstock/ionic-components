import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `<div [ngClass]="{ 'visible': visible }">
              <ng-content *ngIf="visible"></ng-content>
            </div>`
})
export class TabContentComponent {
  @Input() content;
  @Output() active: EventEmitter<any> = new EventEmitter();

  visible: boolean = false;

  show() {
    this.visible = true;
    this.active.emit(true);
  }

  hide() {
    this.visible = false;
    this.active.emit(false);
  }
}

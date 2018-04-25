const uuid = require('uuid/v4');
import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';

declare let jQuery;

@Component({
  selector: 'tab',
  template: `{{ title }}`,
  host: {
    '(click)': 'trackHostClickEvent($event)',
  }
})
export class TabComponent {
  id: string = uuid();

  @Input() title: string;
  @Input() index: string;
  @Output() activate: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.active') active: boolean = false;

  trackHostClickEvent(event) {
    this.activate.emit(this.index);
  }

  setActive(bool) {
    this.active = bool;
  }
}

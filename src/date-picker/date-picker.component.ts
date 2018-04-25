import {setImmediate} from 'timers';
import {Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';

import * as jQuery from 'jquery';
require('bootstrap-datepicker');

import {moment} from '../utils/momentConfig';

let datePickerConfig: any = {
  format: 'dd.mm.yyyy',
  language: 'de',
  autoclose: true,
  orientation: 'top left'
};

@Component({
  selector: 'date-picker',
  template: `<input type="text" [value]="value" class="form-control date-picker" #dateInput  [disabled]="disabled"/>`,
  inputs: ['disabled']
})
export class DatePickerComponent {
  @Input() value: 'any';

  @ViewChild('dateInput') dateInput: any;
  @Output('selectionChanged') selectionChanged: EventEmitter<any> = new EventEmitter();

  _disabled: boolean = false;

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = value;
    if (!value) {
      this.initPicker();
    } else {
      jQuery(this.dateInput.nativeElement).datepicker('destroy')
    }
  }

  initPicker() {
    setImmediate(() => {
      jQuery(this.dateInput.nativeElement)
        .datepicker(datePickerConfig)
        .on('changeDate', (e) => this.selectionChanged.emit(moment(e.date)));
    });
  }
}

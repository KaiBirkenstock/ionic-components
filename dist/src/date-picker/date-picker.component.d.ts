import { EventEmitter } from '@angular/core';
export declare class DatePickerComponent {
    value: 'any';
    dateInput: any;
    selectionChanged: EventEmitter<any>;
    _disabled: boolean;
    disabled: boolean;
    initPicker(): void;
}

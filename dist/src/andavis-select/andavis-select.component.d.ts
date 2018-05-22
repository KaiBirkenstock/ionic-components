import { FormControl } from '@angular/forms';
import { EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
/**
 * @param options [{value: any, label any}]
 */
export declare class AndavisSelect implements OnInit {
    translate: TranslateService;
    private _value;
    private _options;
    model: any;
    options: any;
    modelChange: EventEmitter<any>;
    label: string;
    labelField: string;
    valueField: string;
    required: any;
    selected: any;
    disabled: boolean;
    please_choose: string;
    debug: boolean;
    changed: EventEmitter<any>;
    disableEmptySelection: boolean;
    selection: FormControl;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    readonly pleaseChooseLabel: any;
    getLabel(option: any): any;
    getValue(option: any): any;
    getGetSelectedValue(value: any): any;
}

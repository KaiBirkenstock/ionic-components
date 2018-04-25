import {FormControl, Validators} from '@angular/forms';
import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {AndavisValidator} from './validators';
import {TranslateService} from '@ngx-translate/core';

/**
 * @param options [{value: any, label any}]
 */
@Component({
  selector: 'andavis-select',
  templateUrl: './andavis-select.component.html'
})
export class AndavisSelect implements OnInit {
  private _value: any;
  private _options: any = [];

  @Input() set model(value: any) {
    if (value && this._value !== value) {
      this._value = value;
      this.selection.setValue(value);
    }
  }

  get model() {
    return this._value;
  }

  get options() {
    return this._options;
  }

  @Output() modelChange: EventEmitter<any> = new EventEmitter();


  @Input() set options(options: any) {
    this._options = options;
  }

  @Input() label: string;
  @Input() labelField = 'label';
  @Input() valueField = 'value';
  @Input() required: any = false;
  @Input() selected: any;
  @Input() disabled: boolean;
  @Input() please_choose = '';
  @Input() debug = false;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Input() disableEmptySelection = false;

  selection: FormControl = new FormControl('please_choose', this.required ? AndavisValidator.nonEmptySelect : Validators.required);

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    if (this.disabled) {
      this.selection.disable();
    }

    this.selection.valueChanges.subscribe((value) => {
      this._value = value;
      this.changed.emit(value);
      this.modelChange.emit(value);
    });

    if (this.selected !== undefined && this.selected !== false) {
      this.selection.setValue(this.getGetSelectedValue(this.selected));
    }
  }

  get pleaseChooseLabel() {
    return this.please_choose.length > 0 ? this.please_choose : this.translate.instant('SEARCH.PLEASE_CHOOSE');
  }

  getLabel(option) {
    return typeof option.get === 'function' ? option.get(this.labelField) : option[this.labelField];
  }

  getValue(option) {
    return typeof option.get === 'function' ? option.get(this.valueField) : option[this.valueField]? option[this.valueField] : option;
  }

  getGetSelectedValue(value) {
    return typeof value === 'object' ? typeof value.get === 'function' ? value.get(this.valueField) : value[this.valueField]? value[this.valueField] : value : value;
  }
}

import { FormControl, Validators } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AndavisValidator } from './validators';
import { TranslateService } from '@ngx-translate/core';
/**
 * @param options [{value: any, label any}]
 */
var AndavisSelect = /** @class */ (function () {
    function AndavisSelect(translate) {
        this.translate = translate;
        this._options = [];
        this.modelChange = new EventEmitter();
        this.labelField = 'label';
        this.valueField = 'value';
        this.required = false;
        this.please_choose = '';
        this.debug = false;
        this.changed = new EventEmitter();
        this.disableEmptySelection = false;
        this.selection = new FormControl('please_choose', this.required ? AndavisValidator.nonEmptySelect : Validators.required);
    }
    Object.defineProperty(AndavisSelect.prototype, "model", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value && this._value !== value) {
                this._value = value;
                this.selection.setValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndavisSelect.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    AndavisSelect.prototype.ngOnInit = function () {
        var _this = this;
        if (this.disabled) {
            this.selection.disable();
        }
        this.selection.valueChanges.subscribe(function (value) {
            _this._value = value;
            _this.changed.emit(value);
            _this.modelChange.emit(value);
        });
        if (this.selected !== undefined && this.selected !== false) {
            this.selection.setValue(this.getGetSelectedValue(this.selected));
        }
    };
    Object.defineProperty(AndavisSelect.prototype, "pleaseChooseLabel", {
        get: function () {
            return this.please_choose.length > 0 ? this.please_choose : this.translate.instant('SEARCH.PLEASE_CHOOSE');
        },
        enumerable: true,
        configurable: true
    });
    AndavisSelect.prototype.getLabel = function (option) {
        return typeof option.get === 'function' ? option.get(this.labelField) : option[this.labelField];
    };
    AndavisSelect.prototype.getValue = function (option) {
        return typeof option.get === 'function' ? option.get(this.valueField) : option[this.valueField] ? option[this.valueField] : option;
    };
    AndavisSelect.prototype.getGetSelectedValue = function (value) {
        return typeof value === 'object' ? typeof value.get === 'function' ? value.get(this.valueField) : value[this.valueField] ? value[this.valueField] : value : value;
    };
    AndavisSelect.decorators = [
        { type: Component, args: [{
                    selector: 'andavis-select',
                    templateUrl: './andavis-select.component.html'
                },] },
    ];
    /** @nocollapse */
    AndavisSelect.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    AndavisSelect.propDecorators = {
        "model": [{ type: Input },],
        "modelChange": [{ type: Output },],
        "options": [{ type: Input },],
        "label": [{ type: Input },],
        "labelField": [{ type: Input },],
        "valueField": [{ type: Input },],
        "required": [{ type: Input },],
        "selected": [{ type: Input },],
        "disabled": [{ type: Input },],
        "please_choose": [{ type: Input },],
        "debug": [{ type: Input },],
        "changed": [{ type: Output },],
        "disableEmptySelection": [{ type: Input },],
    };
    return AndavisSelect;
}());
export { AndavisSelect };
//# sourceMappingURL=andavis-select.component.js.map
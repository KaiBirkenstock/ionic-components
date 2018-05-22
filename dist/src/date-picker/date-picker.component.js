import { setImmediate } from 'timers';
import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import * as jQuery from 'jquery';
require('bootstrap-datepicker');
import { moment } from '../utils/momentConfig';
var datePickerConfig = {
    format: 'dd.mm.yyyy',
    language: 'de',
    autoclose: true,
    orientation: 'top left'
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.selectionChanged = new EventEmitter();
        this._disabled = false;
    }
    Object.defineProperty(DatePickerComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (!value) {
                this.initPicker();
            }
            else {
                jQuery(this.dateInput.nativeElement).datepicker('destroy');
            }
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.initPicker = function () {
        var _this = this;
        setImmediate(function () {
            jQuery(_this.dateInput.nativeElement)
                .datepicker(datePickerConfig)
                .on('changeDate', function (e) { return _this.selectionChanged.emit(moment(e.date)); });
        });
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-picker',
                    template: "<input type=\"text\" [value]=\"value\" class=\"form-control date-picker\" #dateInput  [disabled]=\"disabled\"/>",
                    inputs: ['disabled']
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.propDecorators = {
        "value": [{ type: Input },],
        "dateInput": [{ type: ViewChild, args: ['dateInput',] },],
        "selectionChanged": [{ type: Output, args: ['selectionChanged',] },],
    };
    return DatePickerComponent;
}());
export { DatePickerComponent };
//# sourceMappingURL=date-picker.component.js.map
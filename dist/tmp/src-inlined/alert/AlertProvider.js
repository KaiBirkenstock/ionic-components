import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'bootstrap/dist/js/bootstrap';
var bootbox = require('bootbox');
var AlertProvider = /** @class */ (function () {
    function AlertProvider(translate) {
        this.translate = translate;
    }
    AlertProvider.prototype.alert = function (config) {
        bootbox.alert({
            size: config.size || 'small',
            title: config.title,
            message: config.message,
            callback: config.callback
        });
    };
    AlertProvider.prototype.confirm = function (config) {
        bootbox.confirm({
            size: config.size || 'small',
            message: config.message,
            callback: config.callback,
            buttons: {
                confirm: {
                    label: this.translate.instant('OK'),
                    className: 'btn-primary'
                },
                cancel: {
                    label: this.translate.instant('GLOBAL.CANCEL'),
                    className: 'btn-default'
                }
            },
        });
    };
    AlertProvider.prototype.prompt = function (config) {
        bootbox.prompt({
            size: config.size || 'small',
            title: config.title,
            value: config.value,
            callback: config.callback,
            buttons: {
                confirm: {
                    label: this.translate.instant('OK'),
                    className: 'btn-primary'
                },
                cancel: {
                    label: this.translate.instant('GLOBAL.CANCEL'),
                    className: 'btn-default'
                }
            }
        });
    };
    AlertProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AlertProvider.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return AlertProvider;
}());
export { AlertProvider };
//# sourceMappingURL=AlertProvider.js.map
import VanillaModal from 'vanilla-modal';
import { EventEmitter, Component, Output, Input } from '@angular/core';
var Modal = /** @class */ (function () {
    function Modal() {
        this._size = 'medium';
        this.height = null;
        this._headline = '';
        this.close = new EventEmitter();
        this.open = new EventEmitter();
    }
    Object.defineProperty(Modal.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (bool) {
            if (this.modal) {
                this._visible = bool;
                if (bool) {
                    this.modal.open("#" + this.target);
                    document.body.style.overflow = 'hidden';
                }
                else if (this.target) {
                    this.onClose();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.onClose = function () {
        document.body.style.overflow = 'auto';
        this.close.emit('42');
        this.modal.close();
    };
    Object.defineProperty(Modal.prototype, "headline", {
        get: function () {
            return this._headline;
        },
        set: function (headline) {
            this._headline = headline;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.ngOnInit = function () {
        var _this = this;
        this.target = "" + this.target;
        this.modal = new VanillaModal({
            page: '#app-container',
            clickOutside: false,
            onClose: function () {
                _this.onClose();
            },
            onOpen: function () {
                _this.open.emit('42');
            }
        });
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: 'modal',
                    template: "\n    <div style=\"display: none;\" id=\"{{target}}\">\n      <div class=\"modal-wrapper {{size}} height-{{height}}\">\n        <div class=\"modal-header\" *ngIf=\"headline\">\n          <h3>{{headline}}</h3>\n        </div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    inputs: ['visible', 'headline', 'height']
                },] },
    ];
    /** @nocollapse */
    Modal.propDecorators = {
        "target": [{ type: Input },],
        "size": [{ type: Input },],
        "close": [{ type: Output },],
        "open": [{ type: Output },],
    };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=modal.component.js.map
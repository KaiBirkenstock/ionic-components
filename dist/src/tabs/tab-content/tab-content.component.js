import { Component, EventEmitter, Input, Output } from '@angular/core';
var TabContentComponent = /** @class */ (function () {
    function TabContentComponent() {
        this.active = new EventEmitter();
        this.visible = false;
    }
    TabContentComponent.prototype.show = function () {
        this.visible = true;
        this.active.emit(true);
    };
    TabContentComponent.prototype.hide = function () {
        this.visible = false;
        this.active.emit(false);
    };
    TabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-content',
                    template: "<div [ngClass]=\"{ 'visible': visible }\">\n              <ng-content *ngIf=\"visible\"></ng-content>\n            </div>"
                },] },
    ];
    /** @nocollapse */
    TabContentComponent.propDecorators = {
        "content": [{ type: Input },],
        "active": [{ type: Output },],
    };
    return TabContentComponent;
}());
export { TabContentComponent };
//# sourceMappingURL=tab-content.component.js.map
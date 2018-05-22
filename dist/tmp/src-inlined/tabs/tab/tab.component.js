var uuid = require('uuid/v4');
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.id = uuid();
        this.activate = new EventEmitter();
        this.active = false;
    }
    TabComponent.prototype.trackHostClickEvent = function (event) {
        this.activate.emit(this.index);
    };
    TabComponent.prototype.setActive = function (bool) {
        this.active = bool;
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "{{ title }}",
                    host: {
                        '(click)': 'trackHostClickEvent($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    TabComponent.propDecorators = {
        "title": [{ type: Input },],
        "index": [{ type: Input },],
        "activate": [{ type: Output },],
        "active": [{ type: HostBinding, args: ['class.active',] },],
    };
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=tab.component.js.map
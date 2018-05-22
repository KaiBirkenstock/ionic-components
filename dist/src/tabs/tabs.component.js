import { ChangeDetectorRef, Component, ContentChildren, ElementRef, NgZone, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
var TabsComponent = /** @class */ (function () {
    function TabsComponent(element, zone, cdr) {
        this.element = element;
        this.zone = zone;
        this.cdr = cdr;
    }
    Object.defineProperty(TabsComponent.prototype, "tab", {
        get: function () {
            return this._activeTab;
        },
        set: function (activeTab) {
            this._activeTab = activeTab;
            activeTab.setActive(true);
            this.contents.filter(function (content) { return content.content == activeTab.index; })[0].show();
            this.contents.filter(function (content) { return content.content != activeTab.index; }).forEach(function (content) { return content.hide(); });
            this.tabs.filter(function (tab) { return tab !== activeTab; }).forEach(function (tab) { return tab.setActive(false); });
        },
        enumerable: true,
        configurable: true
    });
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            tab.activate.subscribe(function () {
                _this.tab = tab;
            });
        });
        setTimeout(function () {
            _this.zone.run(function () {
                _this.tab = _this.tabs.first;
                _this.cdr.markForCheck();
            });
        }, 300);
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "\n    <ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: ChangeDetectorRef, },
    ]; };
    TabsComponent.propDecorators = {
        "tabs": [{ type: ContentChildren, args: [TabComponent,] },],
        "contents": [{ type: ContentChildren, args: [TabContentComponent,] },],
    };
    return TabsComponent;
}());
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map
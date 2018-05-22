import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
var PageComponent = /** @class */ (function () {
    function PageComponent(router, location) {
        this.router = router;
        this.location = location;
        this.pageTitle = '';
        this.pageSubTitle = '';
        this.showBackButton = false;
    }
    Object.defineProperty(PageComponent.prototype, "backUrl", {
        get: function () {
            return this.router.url.substr(0, this.router.url.lastIndexOf('/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "canNavigateBack", {
        get: function () {
            return this.backUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    PageComponent.prototype.back = function () {
        this.location.back();
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-component',
                    template: "\n    <div id=\"page-container\" class=\"page-header-modern main-content-boxed\">\n      <aside id=\"side-overlay\"></aside>\n      <nav id=\"sidebar\"></nav>\n      <main id=\"main-container\">\n        <ng-content></ng-content>\n      </main>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: Location, },
    ]; };
    PageComponent.propDecorators = {
        "pageTitle": [{ type: Input },],
        "pageSubTitle": [{ type: Input },],
        "showBackButton": [{ type: Input },],
    };
    return PageComponent;
}());
export { PageComponent };
//# sourceMappingURL=page.js.map
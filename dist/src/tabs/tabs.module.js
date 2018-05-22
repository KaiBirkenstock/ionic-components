import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TabsComponent,
                        TabComponent,
                        TabContentComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        TabsComponent,
                        TabComponent,
                        TabContentComponent
                    ]
                },] },
    ];
    return TabsModule;
}());
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map
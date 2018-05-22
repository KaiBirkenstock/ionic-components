import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { COMPONENTS } from './components.list';
import { TabsModule } from './tabs/tabs.module';
import { AlertProvider } from './alert/AlertProvider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var IonicComponentsModule = /** @class */ (function () {
    function IonicComponentsModule() {
    }
    IonicComponentsModule.forRoot = function () {
        return {
            ngModule: IonicComponentsModule
        };
    };
    IonicComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        TabsModule
                    ],
                    declarations: COMPONENTS.slice(),
                    exports: [
                        FormsModule,
                        CommonModule,
                        TabsModule
                    ].concat(COMPONENTS),
                    entryComponents: COMPONENTS.slice(),
                    providers: [
                        AlertProvider
                    ]
                },] },
    ];
    return IonicComponentsModule;
}());
export { IonicComponentsModule };
//# sourceMappingURL=Components.module.js.map
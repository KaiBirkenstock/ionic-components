import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {COMPONENTS} from './components.list';
import {TabsModule} from './tabs/tabs.module';
import {AlertProvider} from './alert/AlertProvider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TabsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    FormsModule,
    CommonModule,
    TabsModule,
    ...COMPONENTS
  ],
  entryComponents: [
    ...COMPONENTS
  ],
  providers: [
    AlertProvider
  ]
})
export class IonicComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicComponentsModule
    };
  }
}
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab/tab.component';
import {TabContentComponent} from './tab-content/tab-content.component';

@NgModule({
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
})
export class TabsModule {
}

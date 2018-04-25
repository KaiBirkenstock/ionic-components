import {
  AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, NgZone,
  QueryList
} from '@angular/core';
import {TabComponent} from './tab/tab.component';
import {TabContentComponent} from './tab-content/tab-content.component';

@Component({
  selector: 'tabset',
  template: `
    <ng-content></ng-content>`
})
export class TabsComponent implements AfterViewInit {
  _activeTab: any;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ContentChildren(TabContentComponent) contents: QueryList<TabContentComponent>;

  constructor(private element: ElementRef,
              public zone: NgZone,
              public cdr: ChangeDetectorRef) {
  }

  get tab() {
    return this._activeTab;
  }

  set tab(activeTab) {
    this._activeTab = activeTab;
    activeTab.setActive(true);

    this.contents.filter(content => content.content == activeTab.index)[0].show();
    this.contents.filter(content => content.content != activeTab.index).forEach(content => content.hide());

    this.tabs.filter(tab => tab !== activeTab).forEach(tab => tab.setActive(false));
  }

  ngAfterViewInit() {
    this.tabs.forEach(tab => {
      tab.activate.subscribe(() => {
        this.tab = tab;
      });
    });

    setTimeout(() => {
      this.zone.run(() => {
        this.tab = this.tabs.first;
        this.cdr.markForCheck();
      });
    }, 300);
  }
}

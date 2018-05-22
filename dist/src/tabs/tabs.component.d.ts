import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
export declare class TabsComponent implements AfterViewInit {
    private element;
    zone: NgZone;
    cdr: ChangeDetectorRef;
    _activeTab: any;
    tabs: QueryList<TabComponent>;
    contents: QueryList<TabContentComponent>;
    constructor(element: ElementRef, zone: NgZone, cdr: ChangeDetectorRef);
    tab: any;
    ngAfterViewInit(): void;
}

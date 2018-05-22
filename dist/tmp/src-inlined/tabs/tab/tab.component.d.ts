import { EventEmitter } from '@angular/core';
export declare class TabComponent {
    id: string;
    title: string;
    index: string;
    activate: EventEmitter<any>;
    active: boolean;
    trackHostClickEvent(event: any): void;
    setActive(bool: any): void;
}

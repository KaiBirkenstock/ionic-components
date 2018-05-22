import { EventEmitter } from '@angular/core';
export declare class TabContentComponent {
    content: any;
    active: EventEmitter<any>;
    visible: boolean;
    show(): void;
    hide(): void;
}

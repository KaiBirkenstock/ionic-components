import { EventEmitter, OnInit } from '@angular/core';
export declare class Modal implements OnInit {
    modal: any;
    _size: string;
    height: string;
    _visible: boolean;
    _headline: string;
    target: string;
    size: string;
    close: EventEmitter<any>;
    open: EventEmitter<any>;
    visible: boolean;
    onClose(): void;
    headline: string;
    ngOnInit(): void;
}

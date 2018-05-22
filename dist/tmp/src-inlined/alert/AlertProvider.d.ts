import { TranslateService } from '@ngx-translate/core';
import 'bootstrap/dist/js/bootstrap';
export interface AlertConfig {
    title?: string;
    callback?: any;
    size?: string;
    message?: string;
    value?: string;
}
export declare class AlertProvider {
    private translate;
    constructor(translate: TranslateService);
    alert(config: AlertConfig): void;
    confirm(config: AlertConfig): void;
    prompt(config: AlertConfig): void;
}

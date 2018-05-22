import { Location } from '@angular/common';
import { Router } from '@angular/router';
export declare class PageComponent {
    router: Router;
    location: Location;
    pageTitle: string;
    pageSubTitle: string;
    showBackButton: boolean;
    constructor(router: Router, location: Location);
    readonly backUrl: string;
    readonly canNavigateBack: boolean;
    back(): void;
}

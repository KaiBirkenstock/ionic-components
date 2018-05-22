import { FormControl } from '@angular/forms';
export interface ValidationResult {
    [key: string]: boolean;
}
export declare class AndavisValidator {
    static nonEmptySelect(control: FormControl): ValidationResult;
    static mailFormat(control: FormControl): ValidationResult;
    static blinkId(control: FormControl): ValidationResult;
}

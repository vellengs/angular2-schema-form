import { ElementRef } from "@angular/core";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
export declare class Form {
    private elementRef;
    private schemaValidatorFactory;
    private fields;
    private fieldsets;
    private controls;
    private controlArray;
    private updatingValidity;
    private buttons;
    schema: any;
    model: any;
    fieldValidators: {
        [fieldId: string]: Function;
    };
    actions: {
        [actionId: string]: Function;
    };
    constructor(elementRef: ElementRef, schemaValidatorFactory: SchemaValidatorFactory);
    submit(): void;
    reset(): void;
    ngOnChanges(changes: any): void;
    private parseSchema(schema);
    private parseFieldsets(schema);
    private parseField(schema, fieldId);
    private createCustomValidatorFn(fieldId, validatorFn);
    private resetAllFields();
    private resetField(fieldId);
    private applyModel();
    private updateFieldsVisibility();
    private updateFieldVisibility(field);
    private updateFieldsValidity(sourceControl);
    private updateFieldsValidityImpl(sourceControl, validityBefore);
    private getValidityArray();
    private parseOrder(schema);
    private parseButtons(schema);
    values: string;
    getModel(): any;
}

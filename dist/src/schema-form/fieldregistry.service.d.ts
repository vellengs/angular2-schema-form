import { StringField } from "./fields";
export declare class FieldRegistryService {
    private fieldTypes;
    private defaultFieldType;
    constructor();
    setDefaultFieldType(fieldType: any): void;
    getDefaultFieldType(): typeof StringField;
    hasFieldType(type: string): boolean;
    registerFieldType(type: string, field: any): void;
    getFieldType(type: string): any;
    getFieldTypes(): any;
}

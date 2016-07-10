import { FormControl } from "@angular/forms";
export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: any): (control: FormControl) => any;
}
export declare class ZSchemaValidatorFactory extends SchemaValidatorFactory {
    private zschema;
    constructor();
    createValidatorFn(schema: any): (control: any) => {
        [key: string]: boolean;
    };
}

import { OnInit, ViewContainerRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldFactory } from "../fieldfactory";
export declare class FieldChooserComponent implements OnInit {
    private fieldFactory;
    private container;
    private fieldInstance;
    typename: string;
    id: string;
    settings: any;
    control: FormControl;
    constructor(fieldFactory?: FieldFactory, container?: ViewContainerRef);
    ngOnInit(): void;
}

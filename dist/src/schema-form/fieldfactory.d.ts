import { ViewContainerRef, ComponentRef, ComponentResolver } from "@angular/core";
import { FieldRegistryService } from "./fieldregistry.service";
export declare class FieldFactory {
    private resolver;
    private registry;
    constructor(registry: FieldRegistryService, resolver: ComponentResolver);
    createField(container: ViewContainerRef, type: string): Promise<ComponentRef<any>>;
}

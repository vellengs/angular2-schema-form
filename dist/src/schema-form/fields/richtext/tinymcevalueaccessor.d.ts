import { TinyMCEComponent } from "./tinymce.component";
import { ControlValueAccessor } from "@angular/forms";
export declare class TinyMCEValueAccessor implements ControlValueAccessor {
    private host;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(host: TinyMCEComponent);
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    private onBlur();
    private onContentChanged(value);
}

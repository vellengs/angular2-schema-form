import { AfterViewInit, EventEmitter, NgZone, OnChanges, OnDestroy } from "@angular/core";
import "tinymce/tinymce";
import "tinymce/themes/modern/theme";
export declare class TinyMCEComponent implements OnChanges, AfterViewInit, OnDestroy {
    private zone;
    readonly: boolean;
    id: string;
    options: any;
    baseURL: string;
    contentChange: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    private editor;
    private initialValue;
    constructor(zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private createEditor();
    private bindEditor();
    removeEditor(): void;
    private emitContentChange();
    setContent(content: string): void;
}

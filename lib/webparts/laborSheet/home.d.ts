import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
export declare class Home {
    webpartContext: WebPartContext;
    constructor(webpartContext: WebPartContext);
    heading: string;
    firstName: string;
    lastName: string;
    previousValue: string;
    readonly fullName: string;
    submit(): void;
    canDeactivate(): boolean | undefined;
}
export declare class UpperValueConverter {
    toView(value: string): string;
}

import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
import { SPUser } from '@microsoft/sp-page-context';
export declare class Home {
    webpartContext: WebPartContext;
    heading: string;
    user: SPUser;
    firstName: string;
    lastName: string;
    previousValue: string;
    constructor(webpartContext: WebPartContext);
    readonly fullName: string;
    submit(): void;
    canDeactivate(): boolean | undefined;
}
export declare class UpperValueConverter {
    toView(value: string): string;
}

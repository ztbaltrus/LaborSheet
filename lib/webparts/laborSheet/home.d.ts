import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
import { SPUser, PageContext } from '@microsoft/sp-page-context';
export declare class Home {
    webpartContext: WebPartContext;
    webPageContext: PageContext;
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

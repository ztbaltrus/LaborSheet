import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ILaborSheetWebPartProps {
    description: string;
}
export default class LaborSheetWebPart extends BaseClientSideWebPart<ILaborSheetWebPartProps> {
    constructor();
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}

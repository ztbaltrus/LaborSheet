import { Aurelia, inject } from 'aurelia-framework';
import { PLATFORM } from "aurelia-pal";
import * as Bluebird from 'bluebird';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './LaborSheetWebPart.module.scss';
import * as strings from 'LaborSheetWebPartStrings';

export interface ILaborSheetWebPartProps {
  description: string;
}
export default class LaborSheetWebPart extends BaseClientSideWebPart<ILaborSheetWebPartProps> {

  public constructor()
  {
    super();
    Bluebird.config({ warnings: { wForgottenReturn: false } });
  }

  public render(): void {
    this.domElement.innerHTML = `
     <div id="${this.instanceId}" class="${this.instanceId}"  >Loading...</div>
     `;

     require(['aurelia-bootstrapper'],(au) =>
     {
       au.bootstrap(
         (aurelia: Aurelia) =>
         {
           aurelia.use
           .standardConfiguration()
           .developmentLogging();
           var el = document.getElementById(this.instanceId);
           aurelia.container.registerInstance ("WebPartContext", this.context);
           aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('webparts/laborSheet/app'),el));
         }
       );

     });
    }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

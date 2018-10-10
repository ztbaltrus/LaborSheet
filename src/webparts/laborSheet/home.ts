//import {computedFrom} from 'aurelia-framework';
import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
import { inject } from 'aurelia-framework';

@inject("WebPartContext")
export class Home {
  public webpartContext: WebPartContext;

  constructor (webpartContext: WebPartContext)
  {
      this.webpartContext = webpartContext;
  }

  public heading: string = 'Labor Report Sheet';
  public firstName: string = 'John';
  public lastName: string = 'Doe';
  public previousValue: string = this.fullName;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  public toView(value: string): string {
    return value && value.toUpperCase();
  }
}

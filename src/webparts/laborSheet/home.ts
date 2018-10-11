import { inject } from 'aurelia-framework';
import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
import { SPUser, PageContext } from '@microsoft/sp-page-context';

@inject("WebPartContextObject")
export class Home {
  public webpartContext: WebPartContext;
  public webPageContext: PageContext;
  public heading: string;
  public user: SPUser;
  public firstName: string = 'John';
  public lastName: string = 'Doe';
  public previousValue: string = this.fullName;

  constructor(webpartContext: WebPartContext) 
  {
    this.webpartContext = webpartContext;
    this.heading = "Hello " + this.webpartContext.pageContext.user.displayName;
  }
  
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

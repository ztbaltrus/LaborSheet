import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Labor Sheet';
    config.map([
      { route: ['', 'home'],   name: 'home',    moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Home' },
      { route: ['production'],   name: 'production',    moduleId: PLATFORM.moduleName('./production'), nav: true, title: 'Production' }
    ]);

    this.router = router;
  }
}

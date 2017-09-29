import { Injectable } from '@angular/core';
import { environment as envDev } from '../../environments/environment';
import { environment as envProd } from '../../environments/environment';

@Injectable()
export class EnvironmentManagerService {

  env = envDev;
  constructor() {
    if (envProd.production) {
      this.env = envProd;
    }
  }

}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Salon} from './salon';
import {AppConfigService} from '../app-config.service';

@Injectable()
export class SalonService {
  adresse: string;
  salons: Array<Salon> = new Array<Salon>();

  constructor(private http: Http, private appConfig: AppConfigService) {

    this.adresse = this.appConfig.apiUrl + 'salon/';

    this.http
      .get(this.adresse)
      .subscribe( resp =>
      this.salons = resp.json(),
        err => console.log(err));
  }

  public findAll() {
    return this.salons;
  }

  public findById(id: number, details?: boolean): any {
    if (details) {
      return this.http
        .get(this.adresse + id);
    }
    for (const salon of this.salons) {
      if (salon.id === id) {
        return salon;
      }
    }
    return null;

  }
}

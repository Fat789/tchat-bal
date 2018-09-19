import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Salon} from './salon';

@Injectable()
export class SalonService {
  adresse: string;
  salon: Array<Salon> = new Array<Salon>();

  constructor(private http: Http) {

    this.http
      .get('http://192.168.0.116:8080/api/salon')
      .subscribe( resp =>
      this.salon = resp.json(),
        err => console.log(err));
  }

  public findAll() {
    return this.salon;
  }

  public findById(id: number, details?: boolean): any {
    if(details){
      return this.http
        .get('http://192.168.0.116:8080/api/salon')
    }
  }
}

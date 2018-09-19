import {Salon} from '../salon/salon';

export class User {

  public id: number;
  public username: string;
  public salons: Array<Salon>


  constructor(id?: number, username?: string) {
    this.id = id;
    this.username = username;
  }
}

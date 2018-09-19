import {Injectable} from '@angular/core';
import {User} from './user';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';



@Injectable()
export class UserService {
  users: Array<User> = new Array<User>();
  user: User = new User();
  apiUrl: string;

  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/utilisateur/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.users = resp.json());
  }

  public findByUsername(username: string, http?: boolean): any {

    if (http) {
      return this.http
        .get(this.apiUrl + username);
    }
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  public findIfExist (username: string, http?: boolean): any {

    if(http) {
      if (http) {
        return this.http
          .get(this.apiUrl + username + 'exists');
    }
      for (const user of this.users) {
        if (user.username === username) {
          return user;
        }
        else {
        return alert('Ce nom d\'utilisateur n\'existe pas');
        }
      }
    }
  }

  public findUsernameWithSalon (username: string, http?: boolean): any {
    if(http){
      return this.http
        .get(this.apiUrl + username + 'salon');
    }
    return this.user.salons;


}
}



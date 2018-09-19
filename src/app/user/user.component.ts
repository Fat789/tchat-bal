import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private formUser: User = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}

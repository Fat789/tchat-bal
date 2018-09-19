import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {userInfo} from 'os';
import {UserComponent} from './user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
  ]
})
export class UserModule { }

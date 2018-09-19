import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'message', component: MessageComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MessageComponent]
})
export class MessageModule { }

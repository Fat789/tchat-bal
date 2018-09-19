import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalonComponent} from './salon.component';
import {SalonService} from './salon.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { SalonDetailComponent } from './salon-detail.component';

const routes: Routes = [
  {path: 'salon', component: SalonComponent},
  {path: 'salon/:id', component: SalonDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SalonComponent,
    SalonDetailComponent,
  ],
  providers: [SalonService, ],
})
export class SalonModule { }

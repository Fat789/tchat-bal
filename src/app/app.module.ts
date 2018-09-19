import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {RouterModule, Routes} from '@angular/router';
import {AppConfigService} from './app-config.service';
import {SalonModule} from './salon/salon.module';
import { MessageComponent } from './message/message.component';
import {MessageModule} from './message/message.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SalonModule,
    MessageModule
  ],
  providers: [
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

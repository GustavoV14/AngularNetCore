import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { LocalComponent } from 'src/pages/Local/Local.component';
import { LocalModule } from 'src/pages/Local/Local.module';
import { RemoteComponent } from 'src/pages/Remote/Remote.component';
import { RemoteModule } from 'src/pages/Remote/Remote.module';
import { RemotePlusComponent } from 'src/pages/RemotePlus/RemotePlus.component';
import { RemotePlusModule } from 'src/pages/RemotePlus/RemotePlus.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocalModule,
    RemoteModule,
    RemotePlusModule



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

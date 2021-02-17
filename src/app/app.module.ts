import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { ServicesModule } from './modules/shared/services/services.module';
import { HomeModule } from './modules/home/home.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ServerStatusModule } from './modules/serverstatus/serverstatus.module';
import { UnderConstructionModule } from './modules/underconstruction/underconstruction.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServicesModule,
    HomeModule,
    AuthenticationModule,
    ServerStatusModule,
    UnderConstructionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

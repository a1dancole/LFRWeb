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
import { StreamModule } from './modules/stream/stream.module';
import { DiscordModule } from './modules/discord/discord.module';
import { HowToConnectModule } from './modules/howtoconnect/howtoconnect.module';
import { ChangesModule } from './modules/changes/changes.module';
import { AccountModule } from './modules/account/account.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { StoreModule } from './modules/store/store.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

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
    UnderConstructionModule,
    StreamModule,
    DiscordModule,
    HowToConnectModule,
    ChangesModule,
    AccountModule,
    BlogsModule,
    StoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

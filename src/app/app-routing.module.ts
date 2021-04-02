import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { DiscordComponent } from './modules/discord/discord.component';
import { HomeComponent } from './modules/home/home.component';
import { HowToConnectComponent } from './modules/howtoconnect/howtoconnect.component';
import { ServerStatusComponent } from './modules/serverstatus/serverstatus.component';
import { StreamComponent } from './modules/stream/stream.component';
import { UnderConstructionComponent } from './modules/underconstruction/underconstruction.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'serverstatus', component: ServerStatusComponent},
  { path: 'underconstruction', component: UnderConstructionComponent},
  { path: 'streams', component: StreamComponent },
  { path: 'discord', component: DiscordComponent },
  { path: 'howtoconnect', component: HowToConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

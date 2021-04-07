import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './modules/account/accountDashoard.component';
import { ChangePasswordComponent } from './modules/account/change-password/change-password.component';
import { UnstuckComponent } from './modules/account/unstuck/unstuck.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { ChangesComponent } from './modules/changes/changes.component';
import { DiscordComponent } from './modules/discord/discord.component';
import { HomeComponent } from './modules/home/home.component';
import { HowToConnectComponent } from './modules/howtoconnect/howtoconnect.component';
import { ServerStatusComponent } from './modules/serverstatus/serverstatus.component';
import { UserGuard } from './modules/shared/guards/user.guard';
import { StreamComponent } from './modules/stream/stream.component';
import { UnderConstructionComponent } from './modules/underconstruction/underconstruction.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'serverstatus', component: ServerStatusComponent},
  { path: 'underconstruction', component: UnderConstructionComponent},
  { path: 'streams', component: StreamComponent },
  { path: 'discord', component: DiscordComponent },
  { path: 'howtoconnect', component: HowToConnectComponent},
  { path: 'latestchanges', component: ChangesComponent},
  { path: 'login', component:LoginComponent },
  { path: 'account', component:AccountDashboardComponent, canActivate: [UserGuard] },
  { path: 'account/changepassword', component:ChangePasswordComponent, canActivate: [UserGuard] },
  { path: 'account/unstuck', component:UnstuckComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

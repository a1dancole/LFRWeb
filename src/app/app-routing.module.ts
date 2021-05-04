import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './modules/account/accountDashoard.component';
import { ChangeFactionComponent } from './modules/account/change-faction/change-faction.component';
import { ChangeNameComponent } from './modules/account/change-name/change-name.component';
import { ChangePasswordComponent } from './modules/account/change-password/change-password.component';
import { ChangeRaceComponent } from './modules/account/change-race/change-race.component';
import { StoreComponent } from './modules/account/store/store.component';
import { UnstuckComponent } from './modules/account/unstuck/unstuck.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { BlogsComponent } from './modules/blogs/blogs.component';
import { ChangesComponent } from './modules/changes/changes.component';
import { DiscordComponent } from './modules/discord/discord.component';
import { HomeComponent } from './modules/home/home.component';
import { HowToConnectComponent } from './modules/howtoconnect/howtoconnect.component';
import { ServerStatusComponent } from './modules/serverstatus/serverstatus.component';
import { UserGuard } from './modules/shared/guards/user.guard';
import { StreamComponent } from './modules/stream/stream.component';
import { UnderConstructionComponent } from './modules/underconstruction/underconstruction.component';
import { WikiClassesDruidComponent } from './modules/wiki/classes/druid/wiki-classes-druid.component';
import { WikiClassesHunterComponent } from './modules/wiki/classes/hunter/wiki-classes-hunter.component';
import { WikiClassesMageComponent } from './modules/wiki/classes/mage/wiki-classes-mage.component';
import { WikiClassesPaladinComponent } from './modules/wiki/classes/paladin/wiki-classes-paladin.component';
import { WikiClassesPriestComponent } from './modules/wiki/classes/priest/wiki-classes-priest.component';
import { WikiClassesShamanComponent } from './modules/wiki/classes/shaman/wiki-classes-shaman.component';
import { WikiClassesWarlockComponent } from './modules/wiki/classes/warlock/wiki-classes-warlock.component';
import { WikiClassesComponent } from './modules/wiki/classes/wiki-classes.component';
import { WikiGeneralComponent } from './modules/wiki/general/wiki-general.component';
import { WikiEyeOfEternityComponent } from './modules/wiki/raids/eye-of-eternity/wiki-eye-of-eternity.component';
import { WikiNaxxramasComponent } from './modules/wiki/raids/naxxramas/wiki-naxxramas.component';
import { WikiObsidianSanctumComponent } from './modules/wiki/raids/obsidian-sanctum/wiki-obsidian-sanctum.component';
import { WikiRaidsComponent } from './modules/wiki/raids/wiki-raids.component';
import { WikiComponent } from './modules/wiki/wiki.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blogs', component: BlogsComponent },
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
  { path: 'account/unstuck', component:UnstuckComponent, canActivate: [UserGuard] },
  { path: 'account/changename', component:ChangeNameComponent, canActivate: [UserGuard] },
  { path: 'account/changefaction', component:ChangeFactionComponent, canActivate: [UserGuard] },
  { path: 'account/changerace', component:ChangeRaceComponent, canActivate: [UserGuard] },
  { path: 'store', component:StoreComponent, canActivate: [UserGuard]},
  { path: 'wiki', component:WikiComponent },
  { path: 'wiki/general', component: WikiGeneralComponent },
  { path: 'wiki/raids', component: WikiRaidsComponent },
  { path: 'wiki/raids/naxxramas', component: WikiNaxxramasComponent },
  { path: 'wiki/raids/obsidian-sanctum', component: WikiObsidianSanctumComponent },
  { path: 'wiki/raids/eye-of-eternity', component: WikiEyeOfEternityComponent },
  { path: 'wiki/classes', component: WikiClassesComponent },
  { path: 'wiki/classes/mage', component: WikiClassesMageComponent },
  { path: 'wiki/classes/hunter', component: WikiClassesHunterComponent },
  { path: 'wiki/classes/priest', component: WikiClassesPriestComponent },
  { path: 'wiki/classes/paladin', component: WikiClassesPaladinComponent },
  { path: 'wiki/classes/warlock', component: WikiClassesWarlockComponent },
  { path: 'wiki/classes/druid', component: WikiClassesDruidComponent },
  { path: 'wiki/classes/shaman', component: WikiClassesShamanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

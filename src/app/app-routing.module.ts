import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './modules/account/accountDashoard.component';
import { ChangeFactionComponent } from './modules/account/change-faction/change-faction.component';
import { ChangeNameComponent } from './modules/account/change-name/change-name.component';
import { ChangePasswordComponent } from './modules/account/change-password/change-password.component';
import { ChangeRaceComponent } from './modules/account/change-race/change-race.component';
import { CharacterBoostComponent } from './modules/account/character-boost/character-boost.component';
import { CharacterImportComponent } from './modules/account/character-import/character-import.component';
import { GoldComponent } from './modules/account/gold/gold.component';
import { StoreComponent } from './modules/account/store/store.component';
import { UnstuckComponent } from './modules/account/unstuck/unstuck.component';
import { AchievementsComponent } from './modules/analytics/achievements/achievements.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { HostComponent } from './modules/analytics/host/host.component';
import { PvpComponent } from './modules/analytics/pvp/pvp.component';
import { RaidsComponent } from './modules/analytics/raids/raids.component';
import { ServerComponent } from './modules/analytics/server/server.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { AboutComponent } from './modules/blogs/about.component';
import { ChangesComponent } from './modules/changes/changes.component';
import { DiscordComponent } from './modules/discord/discord.component';
import { HomeComponent } from './modules/home/home.component';
import { HowToConnectComponent } from './modules/howtoconnect/howtoconnect.component';
import { LeaderboardsComponent } from './modules/leaderboards/leaderboards.component';
import { ServerStatusComponent } from './modules/serverstatus/serverstatus.component';
import { UserGuard } from './modules/shared/guards/user.guard';
import { StreamComponent } from './modules/stream/stream.component';
import { UnderConstructionComponent } from './modules/underconstruction/underconstruction.component';
import { WikiClassesDeathknightComponent } from './modules/wiki/classes/deathknight/wiki-classes-deathknight.component';
import { WikiClassesDruidComponent } from './modules/wiki/classes/druid/wiki-classes-druid.component';
import { WikiClassesHunterComponent } from './modules/wiki/classes/hunter/wiki-classes-hunter.component';
import { WikiClassesMageComponent } from './modules/wiki/classes/mage/wiki-classes-mage.component';
import { WikiClassesPaladinComponent } from './modules/wiki/classes/paladin/wiki-classes-paladin.component';
import { WikiClassesPriestComponent } from './modules/wiki/classes/priest/wiki-classes-priest.component';
import { WikiClassesRogueComponent } from './modules/wiki/classes/rogue/wiki-classes-rogue.component';
import { WikiClassesShamanComponent } from './modules/wiki/classes/shaman/wiki-classes-shaman.component';
import { WikiClassesWarlockComponent } from './modules/wiki/classes/warlock/wiki-classes-warlock.component';
import { WikiClassesWarriorComponent } from './modules/wiki/classes/warrior/wiki-classes-warrior.component';
import { WikiClassesComponent } from './modules/wiki/classes/wiki-classes.component';
import { WikiGeneralComponent } from './modules/wiki/general/wiki-general.component';
import { WikiEyeOfEternityComponent } from './modules/wiki/raids/eye-of-eternity/wiki-eye-of-eternity.component';
import { WikiNaxxramasComponent } from './modules/wiki/raids/naxxramas/wiki-naxxramas.component';
import { WikiObsidianSanctumComponent } from './modules/wiki/raids/obsidian-sanctum/wiki-obsidian-sanctum.component';
import { WikiUlduarComponent } from './modules/wiki/raids/ulduar/wiki-ulduar.component';
import { WikiVaultOfArchavonComponent } from './modules/wiki/raids/vault-of-archavon/wiki-vault-of-archavon.component';
import { WikiRaidsComponent } from './modules/wiki/raids/wiki-raids.component';
import { WikiComponent } from './modules/wiki/wiki.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
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
  { path: 'account/gold', component:GoldComponent, canActivate: [UserGuard] },
  { path: 'account/characterboost', component:CharacterBoostComponent, canActivate: [UserGuard] },
  { path: 'account/characterimport', component:CharacterImportComponent, canActivate: [UserGuard] },
  { path: 'store', component:StoreComponent, canActivate: [UserGuard] },
  { path: 'wiki', component:WikiComponent },
  { path: 'wiki/general', component: WikiGeneralComponent },
  { path: 'wiki/raids', component: WikiRaidsComponent },
  { path: 'wiki/raids/naxxramas', component: WikiNaxxramasComponent },
  { path: 'wiki/raids/obsidian-sanctum', component: WikiObsidianSanctumComponent },
  { path: 'wiki/raids/eye-of-eternity', component: WikiEyeOfEternityComponent },
  { path: 'wiki/raids/vault-of-archavon', component: WikiVaultOfArchavonComponent },
  { path: 'wiki/raids/ulduar', component: WikiUlduarComponent },
  { path: 'wiki/classes', component: WikiClassesComponent },
  { path: 'wiki/classes/mage', component: WikiClassesMageComponent },
  { path: 'wiki/classes/hunter', component: WikiClassesHunterComponent },
  { path: 'wiki/classes/priest', component: WikiClassesPriestComponent },
  { path: 'wiki/classes/paladin', component: WikiClassesPaladinComponent },
  { path: 'wiki/classes/warlock', component: WikiClassesWarlockComponent },
  { path: 'wiki/classes/druid', component: WikiClassesDruidComponent },
  { path: 'wiki/classes/shaman', component: WikiClassesShamanComponent },
  { path: 'wiki/classes/warrior', component: WikiClassesWarriorComponent },
  { path: 'wiki/classes/deathknight', component: WikiClassesDeathknightComponent },
  { path: 'wiki/classes/rogue', component: WikiClassesRogueComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'analytics/raids', component: RaidsComponent },
  { path: 'analytics/host', component: HostComponent },
  { path: 'analytics/server', component: ServerComponent },
  { path: 'analytics/achievements', component: AchievementsComponent },
  { path: 'analytics/pvp', component: PvpComponent },
  { path: 'leaderboards', component: LeaderboardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

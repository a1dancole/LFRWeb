import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WikiClassesDruidComponent } from './classes/druid/wiki-classes-druid.component';
import { WikiClassesHunterComponent } from './classes/hunter/wiki-classes-hunter.component';
import { WikiClassesMageComponent } from './classes/mage/wiki-classes-mage.component';
import { WikiClassesPaladinComponent } from './classes/paladin/wiki-classes-paladin.component';
import { WikiClassesPriestComponent } from './classes/priest/wiki-classes-priest.component';
import { WikiClassesShamanComponent } from './classes/shaman/wiki-classes-shaman.component';
import { WikiClassesWarlockComponent } from './classes/warlock/wiki-classes-warlock.component';
import { WikiClassesComponent } from './classes/wiki-classes.component';
import { WikiGeneralComponent } from './general/wiki-general.component';
import { WikiEyeOfEternityComponent } from './raids/eye-of-eternity/wiki-eye-of-eternity.component';
import { WikiNaxxramasComponent } from './raids/naxxramas/wiki-naxxramas.component';
import { WikiObsidianSanctumComponent } from './raids/obsidian-sanctum/wiki-obsidian-sanctum.component';
import { WikiRaidsComponent } from './raids/wiki-raids.component';
import { WikiComponent } from './wiki.component';

@NgModule({
  declarations: [
    WikiComponent,
    WikiGeneralComponent,
    WikiRaidsComponent,
    WikiNaxxramasComponent,
    WikiObsidianSanctumComponent,
    WikiEyeOfEternityComponent,
    WikiClassesComponent,
    WikiClassesMageComponent,
    WikiClassesDruidComponent,
    WikiClassesHunterComponent,
    WikiClassesPaladinComponent,
    WikiClassesPriestComponent,
    WikiClassesShamanComponent,
    WikiClassesWarlockComponent
  ],
  providers: [],
  imports: [SharedModule, RouterModule],
})
export class WikiModule {}

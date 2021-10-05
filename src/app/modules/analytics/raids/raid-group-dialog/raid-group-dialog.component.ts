import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Encounter } from '../../models/encounter';
import { GroupMember } from '../../models/groupMember';

@Component({
  selector: 'raid-group-dialog',
  templateUrl: 'raid-group-dialog.component.html',
})
export class RaidGroupDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public encounter: Encounter,
    private _dialogRef: MatDialogRef<RaidGroupDialogComponent>
  ) {}

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public getClassIconUri(groupMember: GroupMember): string {
    switch (groupMember.playerClass) {
      case 'Mage':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg';
      case 'Hunter':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg';
      case 'Warlock':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg';
      case 'Priest':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg';
      case 'Rogue':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg';
      case 'Warrior':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg';
      case 'Druid':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg';
      case 'Shaman':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg';
      case 'Paladin':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg';
      case 'Death knight':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_deathknight.jpg'
    }
    return '';
  }

  public getSpecIconUri(groupMember: GroupMember): string {
    switch (groupMember.playerSpec) {
      case 'Arms':
        return '../../../../../assets/images/classicons/warrior/arms.png';
      case 'Fury':
        return '../../../../../assets/images/classicons/warrior/fury.png';
      case 'Protection':
        return '../../../../../assets/images/classicons/warrior/protection.png';
      case 'Arcane':
        return '../../../../../assets/images/classicons/mage/arcane.png';
      case 'Fire':
        return '../../../../../assets/images/classicons/mage/fire.png';
      case 'Frost':
        return '../../../../../assets/images/classicons/mage/frost.png';
      case 'Balance':
        return '../../../../../assets/images/classicons/druid/balance.png';
      case 'Feral Combat':
        return '../../../../../assets/images/classicons/druid/feral.png';
      case 'Restoration':
        return '../../../../../assets/images/classicons/druid/restoration.png';
      case 'Holy':
        return '../../../../../assets/images/classicons/paladin/holy.png';
      case 'Retribution':
        return '../../../../../assets/images/classicons/paladin/retribution.png';
      case 'Assassination':
        return '../../../../../assets/images/classicons/rogue/assassination.png';
      case 'Combat':
        return '../../../../../assets/images/classicons/rogue/combat.png';
      case 'Subtlety':
        return '../../../../../assets/images/classicons/rogue/subtlety.png';
      case 'Discipline':
        return '../../../../../assets/images/classicons/priest/discipline.png';
      case 'Shadow':
        return '../../../../../assets/images/classicons/priest/shadow.png';
      case 'Blood':
        return '../../../../../assets/images/classicons/deathknight/blood.png';
      case 'Frost':
        return '../../../../../assets/images/classicons/deathknight/frost.png';
      case 'Unholy':
        return '../../../../../assets/images/classicons/deathknight/unholy.png';
      case 'Elemental':
        return '../../../../../assets/images/classicons/shaman/elemental.png';
      case 'Enhancement':
        return '../../../../../assets/images/classicons/shaman/enhancement.png';
      case 'Restoration':
        return '../../../../../assets/images/classicons/shaman/restoration.png';
      case 'Affliction':
        return '../../../../../assets/images/classicons/warlock/affliction.png';
      case 'Demonology':
        return '../../../../../assets/images/classicons/warlock/demonology.png';
      case 'Destruction':
        return '../../../../../assets/images/classicons/warlock/destruction.png';
      case 'Beast Mastery':
        return '../../../../../assets/images/classicons/hunter/beastmastery.png';
      case 'Marksmanship':
        return '../../../../../assets/images/classicons/hunter/marksmanship.png';
      case 'Survival':
        return '../../../../../assets/images/classicons/hunter/survival.png';
    }
    return '';
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
import { SharedModule } from '../shared/shared.module';
import { AccountService } from './account.service';
import { AccountDashboardComponent } from './accountDashoard.component';
import { ChangeFactionComponent } from './change-faction/change-faction.component';
import { ChangeNameComponent } from './change-name/change-name.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeRaceComponent } from './change-race/change-race.component';
import { GenericPaypalDialogComponent } from './generic-paypal-dialog/generic-paypal-dialog.component';
import { GoldPaypalDialog } from './gold/gold-paypal-dialog/generic-paypal-dialog.component';
import { GoldComponent } from './gold/gold.component';
import { PaypalDialogComponent } from './store/paypal-dialog/paypal-dialog.component';
import { StoreComponent } from './store/store.component';
import { StoreService } from './store/store.service';
import { UnstuckComponent } from './unstuck/unstuck.component';
import { CharacterBoostComponent } from './character-boost/character-boost.component'

@NgModule({
  declarations: [
    AccountDashboardComponent,
    ChangePasswordComponent,
    UnstuckComponent,
    StoreComponent,
    PaypalDialogComponent,
    ChangeNameComponent,
    GenericPaypalDialogComponent,
    ChangeFactionComponent,
    ChangeRaceComponent,
    GoldComponent,
    GoldPaypalDialog,
    CharacterBoostComponent
  ],
  providers: [AccountService, StoreService],
  imports: [SharedModule, RouterModule, NgxPayPalModule],
})
export class AccountModule {}

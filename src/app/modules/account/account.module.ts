import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { SharedModule } from "../shared/shared.module";
import { AccountService } from "./account.service";
import { AccountDashboardComponent } from "./accountDashoard.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { UnstuckComponent } from "./unstuck/unstuck.component";

@NgModule({
  declarations: [AccountDashboardComponent, ChangePasswordComponent, UnstuckComponent],
  providers: [
    AccountService
  ],
  imports: [SharedModule],
})
export class AccountModule {}

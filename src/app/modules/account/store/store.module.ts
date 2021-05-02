import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreComponent } from "./store.component"
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalDialogComponent } from "./paypal-dialog/paypal-dialog.component";
import { StoreService } from "./store.service";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [StoreComponent, PaypalDialogComponent],
  providers: [StoreService],
  imports: [SharedModule, RouterModule, NgxPayPalModule]
})
export class StoreModule { }

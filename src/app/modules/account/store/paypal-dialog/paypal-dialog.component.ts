import { IPayPalConfig, ICreateOrderRequest, ITransactionItem } from 'ngx-paypal';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaypalDialogData } from './paypal-dialog-data';
import { StoreService } from '../store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorizedOrder } from 'src/app/modules/shared/models/authorizedOrder';

@Component({
  selector: 'paypal-dialog',
  templateUrl: 'paypal-dialog.component.html',
})
export class PaypalDialogComponent {
  public payPalConfig?: IPayPalConfig;

  constructor(@Inject(MAT_DIALOG_DATA)private _data: PaypalDialogData, private _dialogRef: MatDialogRef<PaypalDialogComponent>, private _storeService: StoreService, private _snackBar: MatSnackBar) {
    this.payPalConfig = this.buildPaypalConfig();
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  private buildPaypalConfig(): IPayPalConfig {
    let cartTotal = this._data.cart.reduce((i,o) => i + (o.cost * (o.itemStackSize ? (o.quantity / o.itemStackSize) : o.quantity)), 0);

    let cartItems: ITransactionItem[] = this._data.cart.map((item) => {
      return {
        name: item.name,
        quantity: item.itemStackSize
          ? (item.quantity / item.itemStackSize).toString()
          : item.quantity.toString(),
        category: 'DIGITAL_GOODS',
        unit_amount: { currency_code: 'GBP', value: item.cost.toString() },
      };
    });

    return {
      currency: 'GBP',
      clientId: 'AdZ9udKQuSQU_I45wLdTA2TqrrNz8C-51MU4N-cbLUyukdp_w3pS96bQh5C1_CwioTWBKhVkwfXQsTnq',
      createOrderOnClient: () => <ICreateOrderRequest> {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'GBP',
                  value: cartTotal.toString(),
                  breakdown: {
                      item_total: {
                          currency_code: 'GBP',
                          value: cartTotal.toString(),
                      }
                  }
              },
              items: cartItems
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onClientAuthorization: (data) => {
        let authorizedOrder: AuthorizedOrder = {
          characterName: this._data.character,
          items: this._data.cart,
          validationId: data.id,
          validationTime: new Date(data.update_time)
        }
        this._storeService.processOrder(authorizedOrder).subscribe(response => {
          this._snackBar.open(`Items sent`, undefined, {
            duration: 2000,
          })
        }, (error: any) => {
          console.log(error);
          this._snackBar.open(`${error.error.detail}`, undefined, { duration: 2000 })
        }).add(() => {
          this._dialogRef.close(true);
        });
      },
      onCancel: (data, actions) => {
        this._dialogRef.close(false);
      },
      onError: err => {
          this._snackBar.open(`${err}`, 'Error', { duration: 2000, panelClass:['warning'] })
          this._dialogRef.close(false);
      }
  };
  }
}

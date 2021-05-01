import { IPayPalConfig, ICreateOrderRequest, ITransactionItem } from 'ngx-paypal';

import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreItem } from '../../shared/models/storeItem';
import { PaypalDialogData } from './paypal-dialog-data';
import { StoreService } from '../store.service';
import { AuthorizedOrder } from '../../shared/models/authorizedOrder';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'paypal-dialog',
  templateUrl: 'paypal-dialog.component.html',
})
export class PaypalDialogComponent {
  public payPalConfig?: IPayPalConfig;

  constructor(@Inject(MAT_DIALOG_DATA)private _data: PaypalDialogData, private _dialogRef: MatDialogRef<PaypalDialogComponent>, private _storeService: StoreService, private _snackBar: MatSnackBar) {
    this.payPalConfig = this.buildPaypalConfig();
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

    console.log(cartItems);

    return {
      currency: 'GBP',
      clientId: 'sb',
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
          this._snackBar.open(`${error.error.detail}`, 'Error', { duration: 2000, panelClass:['warning'] })
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

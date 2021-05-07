import { IPayPalConfig, ICreateOrderRequest, ITransactionItem } from 'ngx-paypal';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { GoldPaypalDialogData } from './generic-paypal-dialog-data';
import { StoreService } from '../../store/store.service';
import { GoldOrder } from 'src/app/modules/shared/models/goldOrder';

@Component({
  selector: 'generic-paypal-dialog',
  templateUrl: 'generic-paypal-dialog.component.html',
})
export class GoldPaypalDialog {
  public payPalConfig?: IPayPalConfig;

  constructor(@Inject(MAT_DIALOG_DATA)private _data: GoldPaypalDialogData, private _dialogRef: MatDialogRef<GoldPaypalDialog>, private _storeService: StoreService, private _snackBar: MatSnackBar) {
    this.payPalConfig = this.buildPaypalConfig();
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  private buildPaypalConfig(): IPayPalConfig {
    return {
      currency: 'GBP',
      clientId: environment.paypalClientId,
      createOrderOnClient: () => <ICreateOrderRequest> {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'GBP',
                  value: this._data.itemCost.toString(),
                  breakdown: {
                      item_total: {
                          currency_code: 'GBP',
                          value: this._data.itemCost.toString()
                      }
                  }
              },
              items: [
                {name: this._data.itemName, quantity: '1', category: 'DIGITAL_GOODS',unit_amount: {currency_code: 'GBP', value: this._data.itemCost.toString()}}
              ]
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
        let goldOrder: GoldOrder = {
          characterName: this._data.character,
          goldAmount: this._data.goldAmount,
          validationId: data.id,
          validationTime: new Date(data.update_time)
        }

        this._storeService.processGold(goldOrder).subscribe(response => {
          this._snackBar.open(`Order processed`, undefined, {
            duration: 2000,
          })
        }, (error: any) => {
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

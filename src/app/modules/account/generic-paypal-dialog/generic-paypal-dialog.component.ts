import { IPayPalConfig, ICreateOrderRequest, ITransactionItem } from 'ngx-paypal';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericPaypalDialogData } from './generic-paypal-dialog-data';
import { StoreService } from '../store/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'generic-paypal-dialog',
  templateUrl: 'generic-paypal-dialog.component.html',
})
export class GenericPaypalDialogComponent {
  public payPalConfig?: IPayPalConfig;

  constructor(@Inject(MAT_DIALOG_DATA)public data: GenericPaypalDialogData, private _dialogRef: MatDialogRef<GenericPaypalDialogComponent>, private _storeService: StoreService, private _snackBar: MatSnackBar) {
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
                  value: this.data.itemCost.toString(),
                  breakdown: {
                      item_total: {
                          currency_code: 'GBP',
                          value: this.data.itemCost.toString()
                      }
                  }
              },
              items: [
                {name: this.data.itemName, quantity: '1', category: 'DIGITAL_GOODS',unit_amount: {currency_code: 'GBP', value: this.data.itemCost.toString()}}
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
        this._storeService.processCharacterService(this.data.character, this.data.characterService).subscribe(response => {
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

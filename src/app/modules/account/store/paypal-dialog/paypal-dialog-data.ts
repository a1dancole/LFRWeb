import { StoreItem } from "src/app/modules/shared/models/storeItem";

export interface PaypalDialogData {
  cart: StoreItem[],
  character: string
}

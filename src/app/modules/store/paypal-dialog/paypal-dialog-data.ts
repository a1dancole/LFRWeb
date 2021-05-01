import { StoreItem } from "../../shared/models/storeItem";

export interface PaypalDialogData {
  cart: StoreItem[],
  character: string
}

import { StoreItem } from "./storeItem";

export interface AuthorizedOrder {
  validationId: string,
  validationTime: Date,
  characterName: string,
  items: StoreItem[]
}

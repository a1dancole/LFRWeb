export interface StoreItem {
  name: string,
  itemId: number,
  imageUri: string,
  cost: number,
  quantity: number,
  multiple: boolean,
  manualTooltip?: string,
  itemStackSize?: number
}

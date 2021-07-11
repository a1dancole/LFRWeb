import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PaypalDialogComponent } from "./paypal-dialog/paypal-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PaypalDialogData } from "./paypal-dialog/paypal-dialog-data";
import { Character } from "../../shared/models/character";
import { StoreItem } from "../../shared/models/storeItem";
import { UserProfile } from "../../shared/models/userprofile";
import { UserCookieService } from "../../shared/services/userCookie.service";

@Component({
  styleUrls: ['./store.component.scss'],
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {

  public items: StoreItem[] = [];
  public cart: StoreItem[] = [];

  public userProfile!: UserProfile | undefined;
  public selectedCharacter!: Character;

  constructor(private _dialog: MatDialog, private _userCookieService: UserCookieService, private _snackBar: MatSnackBar) {
    this.items = this.buildItems();
  }

  ngOnInit() {
    this.userProfile = this._userCookieService.getLoggedInUser();
  }

  public getRelString(item: StoreItem): string {
    return `item=${item.itemId}`;
  }

  public increaseItemQuantity(item: StoreItem): void {
    if(item.multiple) item.quantity++;
    else item.quantity = 1;

    let cartItemIndex = this.cart.findIndex(o => o.itemId == item.itemId);

    if(cartItemIndex === -1) {
      this.cart.push(item);
    } else {
      this.cart[cartItemIndex].quantity = item.quantity;
    }
  }

  public decreaseItemQuantity(event: Event, item: StoreItem): void {
    event.preventDefault();
    if(item.multiple) item.quantity--;
    else item.quantity = 0;

    let cartItemIndex = this.cart.findIndex(o => o.itemId == item.itemId);

    if(item.quantity <= 0)
      this.cart.splice(cartItemIndex, 1);
    else
      this.cart[cartItemIndex].quantity = item.quantity;
  }

  public cartTotal(): string {
    let total = 0;

    if(this.cart.length > 0) {
      total = this.cart.reduce((i,o) => i + (o.cost * o.quantity), 0)
    }

    let currencyFormatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    })

    return `Total: ${currencyFormatter.format(total)}`;
  }

  public openPaypalDialog(): void {
    if(!this.selectedCharacter)
    {
      this._snackBar.open(`You must select a character`, 'Error', {
        duration: 2000,
        panelClass: ['warning'],
      });
      return;
    }

    let payPalDialogData: PaypalDialogData = { cart: this.getCartForServerPosting(), character: this.selectedCharacter.name }

    const dialogRef = this._dialog.open(PaypalDialogComponent, {
      data: payPalDialogData,
      disableClose: true
    }).afterClosed().subscribe((success: boolean) => {
      if(success) {
        this.resetCart();
      }
    })
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  private buildItems(): StoreItem[] {
    return [
      {cost: 3, name: "Call Filch", itemId: 500001, imageUri: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beastcall.jpg", quantity: 0, multiple: false, manualTooltip: "Summon Filch for 30seconds. Provides buffs, bank, stables, auction house, group summons, group ressurect, repair and reagents. This item lasts 30days"},
      {cost: 10, name: "Swift Spectral Tiger", itemId: 33225, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_spectraltiger.jpg", quantity: 0, multiple: false},
      {cost: 5, name: "Foror's Endless Storage", itemId: 23162, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_crate_04.jpg", quantity: 0, multiple: true},
      {cost: 10, name: "Big Battle Bear", itemId: 38576, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_druid_challangingroar.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "X-51 Nether-Rocket X-TREME", itemId: 35226, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_rocketmount.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Riding Turtle", itemId: 23720, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_hunter_pet_turtle.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "X-53 Touring Rocket", itemId: 54860, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_rocketmount2.jpg", quantity: 0, multiple: false},
      {cost: 2, name: "Landro's Gift Box", itemId: 54218, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_box_03.jpg", quantity: 0, multiple: true},
      {cost: 10, name: "Swift Razzashi Raptor", itemId: 19872, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_raptor.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Swift Zulian Tiger", itemId: 19902, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_jungletiger.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Black Qiraji Battle Tank", itemId: 21176, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_misc_qirajicrystal_05.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Amani War Bear", itemId: 33809, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_druid_challangingroar.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Swift Nether Drake", itemId: 30609, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_netherdrakeelite.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Magic Rooster Egg", itemId: 46778, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_egg_03.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Ashes of Al'ar", itemId: 32458, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_misc_summerfest_brazierorange.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Celestial Steed", itemId: 54811, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_celestialhorse.jpg", quantity: 0, multiple: false},
      {cost: 10, name: "Swift White Hawkstrider", itemId: 35513, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/ability_mount_cockatricemountelite_white.jpg", quantity: 0, multiple: false},
      {cost: 3, name: "Graccu's Mince Meat Fruitcake", itemId: 500002, imageUri: "https://wotlkdb.com/static/images/wow/icons/large/inv_food_christmasfruitcake_01.jpg", quantity: 0, multiple: false, manualTooltip: "Restores 10% of your health and mana per second for 20 sec. Unlimited charges. This item lasts 30days"},
    ]
  }

  private getCartForServerPosting(): StoreItem[] {
    var cartToUpdate: StoreItem[] = JSON.parse(JSON.stringify(this.cart));
    cartToUpdate.forEach(o => o.quantity = o.itemStackSize ? o.quantity * o.itemStackSize : o.quantity);
    return cartToUpdate;
  }

  private resetCart(): void {
    this.items = this.buildItems();
    this.cart = [];
  }
}

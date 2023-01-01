import { bread, cheese, lettuce, milk, tomato } from "./items.js"

interface Item {
  id: number;
  name: string;
  price: number;
}

export class ShoppingCart {

  cart: Array<Item> = []


  getCostTotal(): number {
    const costTotal = this.cart.reduce((total, currentItem) => {
      total += currentItem.price;
      return total;
    }, 0);
    return costTotal;
  }


  getNumberOfItems(): number {
    return this.cart.length;
  }


  getCart(): Item[] {
    return [...this.cart];
  };


  addToCart(item: Item): void {
    const itemExists = this.cart.find((currentItem) => {
      if (currentItem.id === item.id) {
        return true;
      }
    });
    if (!itemExists) {
      this.cart.push(item);
    }
  }

 
  removeFromCart(item: Item): void {
    const newCart = this.cart.filter((currentItem) => {
      if (currentItem.id !== item.id) {
        return true;
      }
    });
    this.cart = [...newCart];
  }
}

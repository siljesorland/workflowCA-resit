import { ShoppingCart } from "./question-4";
import { bread, cheese, lettuce, milk, tomato } from "./items";

/* 1. Test that you can add an item to the cart: Use the addToCart method to add a single item, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test('add items to cart', () => {
    const myCart1 = new ShoppingCart();
    myCart1.addToCart(cheese);

    console.log(cart.getCart())
    expect(myCart1.getCostTotal()).toEqual(5.95)
    expect(myCart1.getNumberOfItems()).toEqual(1)
    expect(myCart1.getCart()).toEqual([cheese])
})

/* 2. Test that you can add an 3 separate items to the cart: Use the addToCart method to add all 3 items, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test("add multiple items to the cart", () => {
    const myCart2 = new ShoppingCart();
    myCart2.addToCart(bread);
    myCart2.addToCart(tomato);
    myCart2.addToCart(cheese);
    expect(myCart2.getCostTotal()).toBe(18, 7);
    expect(myCart2.getNumberOfItems()).toBe(3);
    expect(myCart2.getCart()).toContain(lettuce);
    expect(myCart2.getCart()).toContain(cheese);
    expect(myCart2.getCart()).toContain(milk);
});

/* 3. Test that you can't add the same item 3 times. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct values.*/

test("adding the same item 3 times", () => {
    const myCart3 = new ShoppingCart();
    myCart3.addToCart(cheese);
    myCart3.addToCart(cheese);
    myCart3.addToCart(cheese);
    expect(myCart3.getCostTotal()).toBe(5.95);
    expect(myCart3.getNumberOfItems()).toBe(1);
    expect(myCart3.getCart()).toContain(bread);
});

/* 4. Test that you can add 2 separate items with addToCart and then remove a single item with removeFromCart. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct items. */

test('add two items and remove one ', () => {
    const myCart4 = new ShoppingCart()
    myCart4.addToCart(cheese)
    myCart4.addToCart(tomato)
    myCart4.removeFromCart(cheese)

    console.log(myCart4.getCart())
    console.log(myCart4.removeFromCart())

    expect(myCart4.getCostTotal()).toEqual(3.5)
    expect(myCart4.getNumberOfItems()).toEqual(2)
    expect(myCart4.getCart()).toEqual([cheese])
})
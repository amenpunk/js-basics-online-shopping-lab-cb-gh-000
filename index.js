var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var min = 1;
    var max = 100;
    var price =  Math.round(Math.random() * (max - min) + min);
    let products = {"itemName" : item, "itemPrice" : price};
    cart.push(products)
    return `${item} has been added to your cart.`;
}

function viewCart() {
   if(!cart.length){
    return "Your shopping cart is empty.";
   }
   else{
       for (var i in cart){
          if(i == 0){
            return `In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}.`
            }
          else if (i == 1) {
            return `In your cart, you have ${cart[i-1].itemName} at ${cart[i-1].itemPrice}, and ${cart[i].itemName} batter at ${cart[i].itemName}.`
          }
          else if (i >= 2) {
            return `In your cart, you have ${cart[i-2].itemName} at ${cart[i-2].itemPrice}, ${cart[i-1].itemName} batter at ${cart[i-1].itemPrice}, and ${cart[i].itemName} at ${cart[i].itemPrice}`
          }
       }
   }


}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

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
        let items = "";
        let lastString = `In your cart, you have`;
       for (var i in cart){
           let currentItem = cart[i].itemName;
           let currentPrice = cart[i].itemPrice;
          if (i === cart.length -1) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}.`;
      } else if (i === cart.length -2) {
        lastString = `${lastString} ${currentItem} at $${currentPrice},`;
      } else {
        lastString = `${lastString} ${currentItem} at $${currentPrice},`;
      }
}
items = lastString;
return items;



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

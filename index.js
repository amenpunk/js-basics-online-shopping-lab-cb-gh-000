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
  // write your code here
  console.log("cart is ", cart);
  if (!cart.length) {
    return "Your shopping cart is empty.";
  } else {

    let items = "";
    let lastString = `In your cart, you have`;
    for (let i = 0; i < cart.length; i++) {
      let currentItem = cart[i].itemName;
      let currentPrice = cart[i].itemPrice;
      if (i === cart.length -1) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}.`;
      } else if (i === cart.length -2) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}, and`;
      } else {
        lastString = `${lastString} ${currentItem} at $${currentPrice},`;
      }
}
items = lastString;
return items;
}
}

function total() {
  var total = 0
  for(let i = 0; i < cart.length;i++){
    total = total+cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
   for( var i = 0; i < cart.length-1; i++){
   if ( cart[i].itemName === item) {
     cart.splice(i, 0);
   }
   else{
    return "That item is not in your cart.";
   }
  return cart;
}

}

function placeOrder(cardNumber) {
  // write your code here
}

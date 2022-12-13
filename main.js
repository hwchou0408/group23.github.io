var cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
setCart();

function setCart() {
  var cartList = "", s_price = 0, total = 0;
  for (let $i = 0; $i < cart.length; $i++) {
    s_price = cart[$i]["price"] * cart[$i]["amount"];
    total += s_price;
    cartList += `<li> ${cart[$i]["name"]} , 單價: ${cart[$i]["price"]}, 數量: ${
      cart[$i]["amount"]
    }, 總價: ${s_price}</li>`;
  }
  $("#cart")
    .empty()
    .append(cartList);
  $("#total").text(total);
}

$("#clear").click(function() {
  cart=[];
  localStorage.removeItem("cart");
  setCart();
});
$(".add_cart").click(function() {
  let product = $(this).closest(".card-body");
  let newItem = {
    name: product.find(".card-title").text(),
    price: $(this).data("price"),
    amount: product.find(".amount").val()
  };
  cart.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  setCart();
});

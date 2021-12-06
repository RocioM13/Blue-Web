function aviso() {
alert ("¿Esta dispuesto a ver el mejor cine del mundo?")
}
function adventencia() { alert ("Te informamos que las funciones de Toccine estara cerrado en previo aviso")
}
function AmpliarImg(x) {
  x.style.height ="78%";
  x.style.width ="78%";

}
function AchicarImg(x) {
  x.style.height ="45%";
  x.style.width ="45%";}


function updateCartTotal(x) {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

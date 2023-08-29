function displayCart(){
    let totalPrice = 0;
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let showItems = "";
    let items = JSON.parse(localStorage.getItem("myCart"));
    document.getElementById('itemcount').innerHTML = items.length;
    getCart.forEach(
        function(items, index){
            let price = items.pPrice.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP'
            });
            showItems = 
            `<div class="cartitem" id="cartitem">
            <img src=${items.pImg} id="itemimage">
            <button onclick='remove(${index})' class="btn-close text-white" id="removebtn"></button>
            <h3 id="itemname">${items.pName}</h3>
            <p id="itemprice"> ${price}</p>
            <hr>
            </div>` + showItems ;

            totalPrice += items.pPrice;
        }
    );
    let finalPrice = Number(totalPrice).toLocaleString('en-PH', {
        style: 'currency',
        currency: 'PHP'
        });
    document.getElementById('cartlist').innerHTML = showItems;
    document.getElementById('total').innerHTML = finalPrice;
    document.getElementById('subtotal').innerHTML = finalPrice;
}
displayCart();

function remove(index){
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let removedItem = getCart.splice(index, 1)[0];
    localStorage.setItem("myCart", JSON.stringify(getCart));
    displayCart(); 
}
function displayCart(){
    let totalPrice = 0;
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let showItems = "";
    let items = JSON.parse(localStorage.getItem("myCart"));
    document.getElementById('itemcount').innerHTML = items.length;
    getCart.forEach(
        function(items, index){
            let qty = items.quantity;
            let sub = qty * items.pPrice;
            let price = items.pPrice.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP'
            });
            let subtot = sub.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP'
            });
            showItems = 
            `
            <div class="row cartitem" id="cartitem">
            <div class=" col-4">
            <img src=${items.pImg} id="itemimage">
            </div>
            <div class="cartdes col-8">
            <button onclick='remove(${index})' class="btn-close text-white" id="removebtn"></button>
            <h3 id="itemname">${items.pName}</h3>
            <dl class="text-end">
            <dt class="dt-edit">Quantity:</dt>
            <dl id="itemqty" class="mx-3">${items.quantity}</dl>
            <dt class="dt-edit">Price:</dt>
            <dl id="subprice" class="m-0 p-0 dt-edit">${subtot}</dl>
            <dl id="itemprice">(${price} each)</dl>
            </dl>
            </div>
            <hr>
            </div>` + showItems ;

            
            totalPrice += sub;
            

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
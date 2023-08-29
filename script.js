

    //  SIGNUP      
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signUpBtn = document.getElementById("signUpBtn");
    
// signUpBtn.addEventListener("click", registerInformation);
    
function registerInformation(event){
    event.preventDefault();
    let usernameValue = username.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    
    let emailRegX = /^([\w\d]+)@([\w]+)\.([\w\.]+)$/;
    let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,20}[\w\W]/;
         // + to combine
        //allowing special chars 1 by 1
        // $ ending the statement
        // {start, end} for range
        // add _@\s for spaces
        //allowing capital and noncapital letter on our input
        //[\w] for a-z, A-Z, 0-9
        //[\W] for special chars
        //[\d] for digits 0-9
    
        // for password
        // 1 = small char
        // 1 = big char
        // 1 = special char
        // 8-10 chars only
    
    if(emailValue.match(emailRegX)){
        alert("Valid Email");
    }else{
        alert("Invalid Email");
    }
    
    if(passwordValue.match(passwordRegX)){
        alert("Valid Password");
    }else{
        alert("Invalid Password");
    }
}
    
//FILTER FUNCTIONS
let selectProd = document.getElementById('productselector');


function filter(){
    let selectedProd = selectProd.value;
    let prodDisplay = document.querySelector('#trial');
    prodDisplay.innerHTML = "";

    function displayProd(item) {
        let price = item.price.toLocaleString('en-PH', {
            style: 'currency',
            currency: 'PHP'
        });
        let display = `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100"> 
                    <img src="${item.photo1}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${item.prodName}</h5>
                        PHP ${price}
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn atc" id="addtocart" onclick="addCart('${item.prodName}', ${item.price}, '${item.photo1}')"><i class="fa-solid fa-plus"></i>Add to Cart</button>
                    </div>
                </div>
            </div>`;
    
        prodDisplay.innerHTML += display;
    }
//SHOW ALL PRODUCTS
    if (selectedProd === 'allproducts'){
    fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        const allProducts = data.products;
        
        for (const category in allProducts) {
            allProducts[category].forEach((product) => {
                displayProd(product);
            });
        }
    })
    .catch(function (error) {
        console.error("Error fetching product data:", error);
    });
    }

// SHOW KEYCHAINS
    else if (selectedProd === 'Keychains'){
    fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        let products = data.products.keychain;
        
        products.forEach((product) => {
            displayProd(product);
        });
    })
    .catch(function (error) {
        console.error("Error fetching product data:", error);
    });

//SHOW STICKERS
    } else if (selectedProd === 'Stickers'){
        fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        let products = data.products.sticker;
        
        products.forEach((product) => {
            displayProd(product);
        });
    })
    .catch(function (error) {
        console.error("Error fetching product data:", error);
    });

//SHOW SHIRTS
    } else if (selectedProd === 'shirts'){
            fetch("./products.json")
        .then((res) => res.json())
        .then((data) => {
            let products = data.products.tshirts;
            
            products.forEach((product) => {
                displayProd(product);
            });
        })
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        });

//SHOW HOODIES
    } else if (selectedProd === 'Hoodies'){
        fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        let products = data.products.hoodies;
            
        products.forEach((product) => {
            displayProd(product);
        });      
    
        })
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        });

//SHOW MOUSEPADS
    } else if (selectedProd === 'Mousepads'){
        fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        let products = data.products.mousepads;
            
        products.forEach((product) => {
            displayProd(product);
        });
    
        })
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        });
        }
    }
filter();

//DISPLAY ALL PRODUCTS
// document.addEventListener("DOMContentLoaded", function () {
//     let prodDisplay = document.querySelector('#trial');

//     fetch("./products.json")
//     .then((res) => res.json())
//     .then((data) => {
//         const allProducts = data.products;
        
//         for (const category in allProducts) {
//             allProducts[category].forEach((product) => {
//                 displayProd(product);
//             });
//         }

//         function displayProd(item) {
//             let price = item.price.toLocaleString('en-PH', {
//                 style: 'currency',
//                 currency: 'PHP'
//             });
//             let display = `
//                 <div class="col-12 col-md-6 col-lg-3">
//                     <div class="card h-100"> 
//                         <img src="${item.photo1}" class="card-img-top" alt="">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.prodName}</h5>
//                             PHP ${price}
//                         </div>
//                         <div class="card-footer text-center">
//                             <button class="btn atc" id="addtocart" onclick="addCart('${item.prodName}', ${item.price}, '${item.photo1}')"><i class="fa-solid fa-plus"></i>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>`;
        
//             prodDisplay.innerHTML += display;
//         }

//     })
//     .catch(function (error) {
//         console.error("Error fetching product data:", error);
//     });
// });

//CART

let cart = [];

if (localStorage.getItem("myCart")){
    cart = JSON.parse(localStorage.getItem("myCart"));
}

function addCart(prodName, prodPrice, prodImg) {
    alert("Sucessfully Added to Cart");
    cart.push({pName: prodName, pPrice: prodPrice, pImg: prodImg});

    localStorage.setItem("myCart", JSON.stringify(cart));
    
    sideCart();
}

function sideCart(){
    let totalPrice = 0;
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let showItems = "";
    // let items = JSON.parse(localStorage.getItem("myCart"));
    // document.getElementById('itemcount').innerHTML = items.length;
    getCart.forEach(
        function(prods, index){
            let price = prods.pPrice.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP'
            });
            showItems = 
            `<div class="row" id="cartitem">
            <div class=" col-4">
                <img src=${prods.pImg} id="sidecartimg">
            </div>
            <div class="cartdes col-8">
                <h5 id="itemname">${prods.pName}</h5>
                <p id="itemprice"> ${price}</p>
                <hr>
                </div>
                <button onclick='removeside(${index})' class="btn-close text-white" id="removebtn"></button>
            </div>` + showItems ;

            totalPrice += prods.pPrice;
        }
    );
    let finalPrice = Number(totalPrice).toLocaleString('en-PH', {
        style: 'currency',
        currency: 'PHP'
        });
    document.getElementById('sidecart').innerHTML = showItems;
    document.getElementById('subtotal').innerHTML = finalPrice;
}
sideCart();


function removeside(index){
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let removedItem = getCart.splice(index, 1)[0];
    localStorage.setItem("myCart", JSON.stringify(getCart));
    sideCart(); 
} 

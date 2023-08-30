

    //  SIGNUP      
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signUpBtn = document.getElementById("signUpBtn");
    

    // SIGNUP AND LOGIN FUNCTION
let signupForm = document.getElementById("signupForm");
let loginForm = document.getElementById("loginForm");
let profile = document.getElementById("profile");
let profileUsername = document.getElementById("profileUsername");

function addData(event){
    event.preventDefault();
    let email = document.getElementById('signupEmail').value;
    let emailPass = document.getElementById('signupPassword').value;
    profileUsername.textContent = email;
    // store data
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', emailPass);
    alert("Signed Up Successful");
    showProfile();
}

function checkData(event){
    event.preventDefault();
    let enterEmail = document.getElementById('emailLogin').value;
    let enterPass = document.getElementById('passLogin').value;
    profileUsername.textContent = enterEmail;
    
    // get data
    let getEmail = localStorage.getItem('userEmail');
    let getPass = localStorage.getItem('userPass');

    if(enterEmail == getEmail){
        if(enterPass == getPass){
            alert("Login Successful");
            showProfile();
        }else {
            alert("Wrong Password");
        }
    }else{
        alert("No User Found");
    }
    
}

function showProfile() {
    signupForm.classList.add("hidden");
    loginForm.classList.add("hidden");
    profile.classList.remove("hidden");
}

function logout() {
    profileUsername.textContent = "";
    profile.classList.add("hidden");
    signupForm.classList.remove("hidden");
    loginForm.classList.remove("hidden");
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
                <div class="card h-100" data-bs-toggle="modal" data-bs-target="#prodmod" onclick="displayModal(${item.id})" > 
                    <img src="${item.photo1}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${item.prodName}</h5>
                         ${price}
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

function displayModal(productId) {
    fetch("./products.json")
        .then((res) => res.json())
        .then((data) => {
            let product = findProductById(data, productId);
            let price = product.price.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP'
    
            });
            if (product) {
                let modalContent = `
                <div class="modal-content" id="displaySelected">
                <div class="modal-header justify-content-center">
                    <h3 class="modal-title" id="modaltitle">${product.prodName}</h3>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-md-7">
                                <div class="carousel-container">
                                    <div id="carouselModal" class="carousel slide" data-bs-ride="carousel">      
                                        <div class="carousel">
                                            <div class="carousel-item active">
                                                <img src="${product.photo1}" class="w-100" alt="">            
                                            </div>
                                            ${product.photo2 ? 
                                                `<div class="carousel-item">
                                                <img src="${product.photo2}" class="w-100" alt="">
                                                </div>` : null}
                                            ${product.photo3 ? 
                                            `<div class="carousel-item">
                                            <img src="${product.photo3}" class="w-100" alt="">
                                            </div>` : null}
                                            
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselModal" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselModal" data-bs-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <dl>
                                <dt class="h5">Product:</dt>
                                <dd class="modDes">${product.prodName}</dd>
                                <dt class="h5">Anime Series:</dt>
                                <dd class="modDes">${product.anime}</dd>
                                <dt class="h5">Price:</dt>
                                <dd class="modDes">${price}</dd>
                                <dt class="h5">Description:</dt>
                                <dd class="modDes">${product.description}</dd>
                                </dl>
                                <form>
                                <label for="qtybox" class="form-label">Quantity:</label>
                                    <select class="form-select" id="qtybox" name="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </form>
                                <div class="text-center my-5">
                                <button class="btn btn-outline-dark atc" id="addtocart" onclick="addCart('${product.prodName}', ${product.price}, '${product.photo1}' ,'${product.id}')"><i class="fa-solid fa-plus"></i>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn modbtn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </div>        

        `;
        
        document.getElementById("displaySelected").innerHTML = modalContent;

        $('#prodmod').modal('show'); 
        }
    })
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        });
}

function findProductById(data, id) {
    for (const category in data.products) {
        const products = data.products[category];
        const product = products.find(item => item.id == id);

        if (product) {
            return product;
        }
    }

    return null;
}

//CART

let cart = [];

if (localStorage.getItem("myCart")){
    cart = JSON.parse(localStorage.getItem("myCart"));
}

function addCart(prodName, prodPrice, prodImg, prodId) {
    let qtybox = document.getElementById('qtybox');
    let quantity = parseInt(qtybox.value);

    let existingProd = cart.find(item => item.pId == prodId);

    if (existingProd) {
        existingProd.quantity += quantity;
    } else {
        cart.push({pName: prodName, pPrice: prodPrice, pImg: prodImg, quantity: quantity, pId: prodId});
}

    localStorage.setItem("myCart", JSON.stringify(cart));
    alert("Sucessfully Added to Cart");
    sideCart();
}

function sideCart(){
    let totalPrice = 0;
    let getCart = JSON.parse(localStorage.getItem("myCart"));
    let showItems = "";
    getCart.forEach(
        function(prods, index){
            let qty = prods.quantity;
            let sub = qty * prods.pPrice;
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
                <div class="row">
                <div class="col-5">
                    <p id="itemqty">Qty: ${prods.quantity}</p>
                </div>
                <div class="col-5">
                    <p id="itemprice">${price}</p>
                </div>
                </div>
                <hr>
                </div>
                <button onclick='removeside(${index})' class="btn-close text-white" id="removebtn"></button>
            </div>` + showItems ;

            totalPrice += sub;
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
    cart.splice(index, 1);
    localStorage.setItem("myCart", JSON.stringify(cart));
    sideCart(); 
} 
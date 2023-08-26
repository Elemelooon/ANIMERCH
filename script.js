
// document.addEventListener("DOMContentLoaded", function () {
//     fetch("./products.json")
//     .then((res) => res.json())
//     // .then((data) => {
//     //     displayProd(data.keychain[0]);
//     .then((data) => {
//         const prods = data.products; 
        
//         prods.forEach((prods) => {
//             displayProd(prods);
//         });

//         function displayProd(item) {
//             let prodDisplay = document.querySelector('#trial')
        
//             let display = `
            
//                 <div class="col-12 col-md-4">
//                     <div class="card h-100"> 
//                         <img src="${item.photo1}" class="card-img-top" alt="">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.prodName}</h5>
//                             PHP ${item.price}
//                         </div>
//                         <div class="card-footer text-center">
//                             <button class="btn atc"><i class="fa-solid fa-plus"></i>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>`
        
//             prodDisplay.innerHTML += display;
//         }
//     })
//     .catch(function (error) {
//           console.error("Error fetching user data:", error);
//         })
//         .finally(function () {
//           generateButton.disabled = false;
//           spinner.classList.add("hidden");
//         });
// }
// );
    //  SIGNUP      
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", registerInformation);

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

document.addEventListener("DOMContentLoaded", function () {
    let prodDisplay = document.querySelector('#trial');

    fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
        const allProducts = data.products;
        
        for (const category in allProducts) {
            allProducts[category].forEach((product) => {
                displayProd(product);
            });
        }

        function displayProd(item) {
            let display = `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card h-100"> 
                        <img src="${item.photo1}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${item.prodName}</h5>
                            PHP ${item.price}
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn atc"><i class="fa-solid fa-plus"></i>Add to Cart</button>
                        </div>
                    </div>
                </div>`;
        
            prodDisplay.innerHTML += display;
        }

        generateButton.disabled = false;
        spinner.classList.add("hidden");
    })
    .catch(function (error) {
        console.error("Error fetching product data:", error);
    });
});

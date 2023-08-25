
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

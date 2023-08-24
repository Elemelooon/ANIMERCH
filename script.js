
document.addEventListener("DOMContentLoaded", function () {
    fetch("./products.json")
    .then((res) => res.json())
    // .then((data) => {
    //     displayProd(data.keychain[0]);
    .then((data) => {
        const products = data.keychain; 
        
        products.forEach((product) => {
            displayProd(product);
        });

        function displayProd(user) {
            let prodDisplay = document.querySelector('#trial')
        
            let display = `
            
                <div class="col-12 col-md-4">
                    <div class="card h-100"> 
                        <img src="${user.photo1}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${user.prodName}</h5>
                            PHP ${user.price}
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn atc"><i class="fa-solid fa-plus"></i>Add to Cart</button>
                        </div>
                    </div>
                </div>`
        
            prodDisplay.innerHTML += display;
        }
    })
    .catch(function (error) {
          console.error("Error fetching user data:", error);
        })
        .finally(function () {
          generateButton.disabled = false;
          spinner.classList.add("hidden");
        });
}
);


const products = document.querySelector("#search");
//obetener el valor del input

products.addEventListener("keyup", (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    //obtener los productos
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`;
    console.log(url); 
fetch(url)
    .then((response) => response.json())
    .then((data) => {   
        const products = data.results.map((product) => {
            return `
            <div class="card-group">
            <div class="card" style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>


            </div>
            </div>
            </div>
            
            `;
        }).join('');
        const productsContainer = document.querySelector('#app');
        productsContainer.innerHTML = products;
    });
});
        




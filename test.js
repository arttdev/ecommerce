const app = document.querySelector("#search");

app.addEventListener("keyup", (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`;
    console.log(url);
    

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const products = data.results.map((product) => {
            return `
            
            <div class="card" style="width: 18rem;">
     
            <img src="${product.thumbnail}" class="card-img-top" alt="360" 

            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>
            </div>

            `;
        }).join('');
        const container = document.querySelector("#app");
        container.innerHTML = products;
        
        })
})


const app = document.querySelector("#search");

app.addEventListener("keyup", (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    const country = "MCO";
    const url = `https://api.mercadolibre.com/sites/${country}/search?q=${searchValue}`;
    //const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`;
    console.log(url);
    

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const products = data.results.map((product) => {
            return `
            <div class="producto">
            <span class="tipo">$ ${product.price}</span>

            <img src="${product.thumbnail}" decoding="async" width="284" height="213">	
            <span class="descripcion">${product.title.length > 25 ? product.title.slice(0, 25) + "..." : product.title} 
            </span>
            <span class="precio">${product.price}</span> 
            </div> 

            
     
        

            `;
        }).join('');
        const container = document.querySelector("#app");
        container.innerHTML = products;
        
        })
})

// paginacion de productos




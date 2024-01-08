

function productData(){

    fetch("https://dummyjson.com/products").then(receive => receive.json()).then(info =>{

    let storeData = info.products
    let storeInfo = document.querySelector("#demo")
    storeInfo.innerHTML =''
    storeData.forEach(function(value,index){

        storeInfo.innerHTML += `
        <div class=" ok col-md-4">

        <div class="card mb-2">
        <img src="${value.thumbnail}" class=" img-1 imd-fluid">
            <div class="card-body card-1">
           <h2 class="title">${value.title} </h2>
           <p class="discription">${value.description}</p>
           <p class="price">Price  ${value.price}</p>
           <p class="discountPercentage">DiscountPercentage  ${value.discountPercentage}</p>
           <p class="rating">Rating  ${value.rating}</p>
           <p class="stock"> Stock  ${value.stock}</p>
           <p class="brand"> Brand  ${value.brand}</p>
           <p class="category">Category  ${value.category}</p>
          

    
            </div>

        </div>

    </div>
    
        
        ` 

    })
  
    }) 
}
productData()
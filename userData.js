



function jsonData(){
    fetch('https://dummyjson.com/users').then(response => response.json()).then((data) =>{


    let store = data.users

    let ul = document.querySelector("#demo")
    ul.innerHTML = ''
    store.forEach(function(value,index){

        ul.innerHTML  += `

        <div class="col-md-4"> 
        <div class="card mb-2">
         <div class="card-body card">
            
         <img src="${value.image}" class="img-fluid profile-img">
      <form> 
      <input class=" form-control mt-1  inpute" type="text" value="${value.firstName} ${value.maidenName} ${value.lastName}" readonly>
      <div class=" inputDiv col-md-6"> <input  type="number" class=" form-control mt-1" id="inpurte-1" value="${value.age}" readonly>  <input type="text" class=" divinput form-control mt-1"  id="inpurte-2" value="${value.gender}" readonly> </div>

      <div class=" inputDiv col-md-6"> <input type="email" class=" form-control mt-1" id="inpurte-1" value="${value.email}" readonly>  <input type="tel" class=" divinput form-control mt-1"  id="inpurte-2" value="${value.phone}" readonly> </div>

    <div class=" inputDiv col-md-6"> <input type="text" class=" form-control mt-1" id="inpurte-1" value="${value.username}" readonly>  <input type="password" class=" divinput form-control mt-1"  id="inpurte-2" value="${value.password}" readonly> </div>

    <div class=" inputDiv col-md-6"> <input type="text" class=" form-control mt-1" id="inpurte-1" value="${value.birthDate}" readonly>  <input type="text" class=" divinput form-control mt-1"  id="inpurte-2" value="${value.bloodGroup}" readonly> </div>
      

      </form>
         </div>
        </div>
        </div>
        `

    })

    console.log(store)
    })

}

setTimeout(function(){jsonData()},1000)
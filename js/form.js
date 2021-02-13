class Product{

    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;    
    }
    
    showProduct(){
        let newDiv = document.createElement("div");
        let newButton = document.createElement("button")
        newDiv.textContent = `Product Name: ${this.name} Product Price: ${this.price} Product Year: ${this.year}`
        newButton.className="btn btn-warning";
        newButton.textContent = "Delete";
        newDiv.appendChild(newButton);
        document.getElementById("products").appendChild(newDiv);
    }
    
}

let form = document.forms[0];
let buttons = document.getElementsByClassName('btn-warning');
let alerts = document.getElementById("alert");

form.onsubmit = addProduct;
products.onclick = removeProduct;

function addProduct(e){
    let errors =0;
    e.preventDefault();
    
    if(e.currentTarget[0].value == ""){
        showErrors(document.getElementById("name"),"errorName","El campo está vacío");  
        notification("alert alert-danger","El producto no se ha podido añadir correctamente. Rellena todos los campos");
        errors++;
    }
    if(e.currentTarget[1].value == ""){
        showErrors(document.getElementById("price"),"errorPrice","El campo está vacío");  
        notification("alert alert-danger","El producto no se ha podido añadir correctamente. Rellena todos los campos");       
        errors++;
    }
    if(e.currentTarget[2].value == ""){
        showErrors(document.getElementById("year"),"errorYear","El campo está vacío");  
        notification("alert alert-danger","El producto no se ha podido añadir correctamente. Rellena todos los campos");       
        errors++;
    }
    if(errors>0){
        return false;
    }
    
    let product = new Product(form.name.value,form.price.value,form.year.value);
    product.showProduct();
    notification("alert alert-success","Se ha añadido el producto correctamente");
    console.log(product); 
     
}

function removeProduct(e){
    if(e.target.className == "btn btn-warning"){
        e.target.parentNode.remove();  
        notification("alert alert-danger","Se ha eliminado el producto correctamente");
    }
    
}

function notification(alert, message){
    alerts.textContent = message;
    alerts.className = alert;

}

//Función para mostrar error a la hora de validar los campos
function showErrors(input,error,message){
    input.classList.add("is-invalid");
	document.getElementById(error).textContent = message;
	

}



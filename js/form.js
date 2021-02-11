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

    };

    removeProduct(e){
        e.currentTarget;
    };
    /* showNotifications(){

    } */

    
}

let form = document.forms[0];
let buttons = document.getElementsByClassName('btn-warning');

form.onsubmit = addProduct;
products.onclick = removeProduct;

function addProduct(e){
    e.preventDefault();
    let product = new Product(form.name.value,form.price.value,form.year.value);
    product.showProduct();
    console.log(product);
}

function removeProduct(e){
    if(e.target.className == "btn btn-warning"){
        e.target.parentNode.remove();    
    }

}



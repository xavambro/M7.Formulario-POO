class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
        
    }
    
    
    

}
let form = document.forms[0];
form.onsubmit = addProduct;

function addProduct(e){
    e.preventDefault();
    let product = new Product(form.name.value,form.price.value,form.year.value);
    console.log(product);
}
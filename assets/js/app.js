
// globals
const myFeaturedElement = document.getElementById('featuredProducts');
let myProducts

GetProductData()

// model
function GetProductData() {
    fetch('https://dummyjson.com/products?limit=100')
        .then((result) => {

            return result.json();
        })
        .then((json) => {

            ProductsRecived(json);

        });
}


// controller
function ProductsRecived(productData) {

    //console.log(productData)

    myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[12], myProducts[29], myProducts[19])
    //console.log(myFeaturedProducts);

    CreateProductView(myFeaturedProducts)
    //CreateProductView(myProducts)
}





// view code
function CreateProductView(myCards) {
    //console.log(myCards);

    myCards.forEach(product => {
        console.log(product);


        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`


        myFeaturedElement.innerHTML += myHTML
    });
}

























function ProductCallback(myId) {
    console.log(myId);
    let myClickedProduct = null;
    myProducts.forEach(product => {
        if (product.id == myId) {
            myClickedProduct = product;
        }
    }
    )
    console.log(myClickedProduct);
    clearApp();
    buildProduct(myClickedProduct)
}

function buildProduct(product) {

    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price}</h3></figure>`


    myFeaturedElement.innerHTML = myHTML
}


function clearApp() {

}











GetProductData()


// model
function GetProductData() {
    fetch('https://dummyjson.com/products')
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

    let myProducts = productData.products



    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[6], myProducts[9], myProducts[23])

    //console.log(myFeaturedProducts);

    CreateProductView(myFeaturedProducts)

}


// view code
function CreateProductView(myCards) {
    console.log(myCards);




}



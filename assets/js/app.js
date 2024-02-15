
// globals
const productSection = document.getElementById('featuredProducts');
const navElement = document.getElementById('navigation');

let myProducts = null


// page load
GetProductData()
GetCategoryData()


/* Model code------------------------------------------------------------- */



function GetProductData() {

    fetch('https://dummyjson.com/products?limit=100')

        .then((result) => {
            //console.log(result);
            return result.json()
        }
        )

        .then((json) => {
            ProductsRecived(json)
        });
}


function GetCategoryData() {

    fetch('https://dummyjson.com/products/categories')

        .then((result) => {
            //console.log(result);
            return result.json()
        }
        )

        .then((json) => {
            ReciveCategoryData(json)
        });
}


/* controller code------------------------------------------------------------- */

//----------------------------------------------------------------------
function ProductsRecived(productData) {

    //console.log(productData)

    myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[8], myProducts[29], myProducts[19])
    //console.log(myFeaturedProducts);

    CreateProductView(myFeaturedProducts)
    // CreateProductView(myProducts)
}

//----------------------------------------------------------------------
function ReciveCategoryData(myCategories) {
    //console.log(myCategories);
    CreateNavBar(myCategories)

}


function NavCallBack(myCategory) {
    console.log(myCategory);

    if (myCategory == "all") {
        CreateProductView(myProducts)

    } else {

        console.log(myCategory);

        let mySelectedProducts = []

        myProducts.forEach(product => {


            if (myCategory == product.category) {

                console.log(product);
                mySelectedProducts.push(product)
            }


        });
        //console.log(mySelectedProducts);

        CreateProductView(mySelectedProducts)
    }

}

//----------------------------------------------------------------------
function ProductCallback(myId) {



    console.log(myId);
    let myClickedProduct = null


    myProducts.forEach(product => {

        if (product.id == myId) {
            myClickedProduct = product
        }
    }
    )

    if (myClickedProduct == null) {
        // ingen produkt
        alert('no product')
    }
    else {
        // produkt
        console.log(myClickedProduct)
        clearApp();
        buildProduct(myClickedProduct)

    }

}



/* view code------------------------------------------------------------- */

function CreateNavBar(mycategories) {
    //navElement
    let myHTML = `<button onclick="NavCallBack('all')">All</button> `


    mycategories.forEach(element => {
        // console.log(element);
        myHTML += `<button onclick="NavCallBack('${element}')">${element}</button> `
    });


    navElement.innerHTML = myHTML
}

//----------------------------------------------------------------------
function CreateProductView(myCards) {
    //console.log(myCards);
    clearApp()

    myCards.forEach(product => {
        // console.log(product);


        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`


        productSection.innerHTML += myHTML
    })
}


//----------------------------------------------------------------------
function buildProduct(product) {

    let myHTML = `<figure class="productDetails" onclick="GetProductData()" ><h2>${product.title}</h2>
  
    <img src="${product.images[0]}">
    <img src="${product.images[2]}">
    <img src="${product.images[3]}">
    <h3>PRIS: ${product.price}</h3>
    <p>${product.description}</p>
    </figure>
    `


    productSection.innerHTML = myHTML
}


//----------------------------------------------------------------------
function clearApp() {
    productSection.innerHTML = ""
}




let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');
let productdetailsObj = document.getElementById('productdetails');
let products = [];

let cart = localStorage.getItem('cart');
if(!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
}

document.addEventListener('click', function (event) {
    if(event.target.matches('.thumbnail')) {
        let id = event.target.getAttribute('data-id');
        showProductDetails(id);
    }
}, false);

function showProductDetails(id) {
    let index = 0;
    for(let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            index = i;
            break;
        }
    }
    
    // index should point the right position in the array
    thumbnailcontainerObj.style.display = 'none';
    productdetailsObj.style.display = 'block';

    let productnameObj = document.getElementById('productname');
    productnameObj.innerHTML = products[index].name;

    let productdescriptionObj = document.getElementById('productdescription'); 
    productdescriptionObj.innerHTML = products[index].description;

    let productimageObj = document.getElementById('productimage');
    productimageObj.src = products[index].imgurl;    

    let priceObj = document.getElementById('price');
    priceObj.innerHTML = products[index].price;

    let totalamountObj = document.getElementById('totalamount');
    totalamountObj.innerHTML = 1 * products[index].price;
    let quantityObj = document.getElementById('quantity');
    quantityObj.value = "1";
    quantityObj.oninput = function() {
        totalamountObj.innerHTML = (products[index].price * quantityObj.value).toFixed(2);
    }
   

    let btnaddcartObj = document.getElementById('btnaddcart');
    btnaddcart.onclick = function() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        products[index].quantity = quantityObj.value;
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        delete products[index].quantity;
        showCart();
        // task: implement the task feature for this
        //       webshop
        
    }
    
    //console.log(cart);
}

function showCart() {
    
    console.log('showCart');
    thumbnailcontainerObj.innerHTML = '';
    let stringInfo = localStorage.getItem('cart');
    console.log('stringify cart: ' + stringInfo)
    let parseInfo = JSON.parse(stringInfo);
    console.log('parsed cart: ');
    console.log(parseInfo);
    let totalPrice = 0;
    let divCart = document.createElement('div');
    for(let i = 0; i<parseInfo.length; i++) {
        
        let prodToAdd = parseInfo[i];
        let divProducts = document.createElement('div');
        
        let priceCalc = Number(prodToAdd.price) * Number(prodToAdd.quantity);
        totalPrice += priceCalc;
        
        let prodImg = document.createElement('img');
        let prodQuantity = document.createElement('label');
        let prodName = document.createElement('label');
        let prodPrice = document.createElement('label');
        let prodRemove = document.createElement('button');
        
        prodImg.src = (prodToAdd.imgurl);
        prodQuantity.innerHTML = Number(prodToAdd.quantity);
        prodName.innerHTML = prodToAdd.name;
        prodPrice.innerHTML = priceCalc;
        prodRemove.innerHTML = 'Remove';
        
        divProducts.appendChild(prodImg);
        divProducts.appendChild(prodQuantity);
        divProducts.appendChild(prodName);
        divProducts.appendChild(prodPrice);
        divProducts.appendChild(prodRemove);
        
        divCart.appendChild(divProducts);
        
        var ix = i;
        prodRemove.addEventListener('click', function() {
            //remove function
            parseInfo.splice(ix, 1);
            //stringify the array
            let storagefy = JSON.stringify(parseInfo);
            localStorage.setItem('cart', storagefy);
            showCart();
        })
    }
    
    let divTotals = document.createElement('div');
    
    let totalLabel = document.createElement('label');
    let totalPriceLabel = document.createElement('label');
    let totalBtn = document.createElement('button');
    
    totalLabel.innerHTML = 'Remove';
    totalPriceLabel.innerHTML = totalPrice;
    totalBtn.innerHTML = 'Buy Now';
    
    divTotals.appendChild(totalLabel);
    divTotals.appendChild(totalPriceLabel);
    divTotals.appendChild(totalBtn);
    
    divCart.appendChild(divTotals);
    
    thumbnailcontainerObj.appendChild(divCart);
    
}

function loadProducts(category) {
    let xhr = new XMLHttpRequest();
    if(category) {
        xhr.open('GET', 'http://localhost:3000/product?category='+category);
    }
    else {
        xhr.open('GET', 'http://localhost:3000/product');        
    }

    xhr.onload = function() {
        if(xhr.status === 200) {
            thumbnailcontainerObj.style.display = 'flex';
            productdetailsObj.style.display = 'none';

            thumbnailcontainerObj.innerHTML = '';
            let resultObj = JSON.parse(xhr.responseText);
            console.log( resultObj );
            products = resultObj.products;
        
            /* to create a div like this: 
                    <div class="thumbnail">
                        <div class="thumbnail-name">Goodfellas</div>
                        <div class="thumbnail-price">19.99 €</div>
                    </div>
            */
            
            for(let i=0; i<products.length; i++) {
                let newThumbnail = document.createElement('div');
                newThumbnail.className = 'thumbnail';

                let newThumbnailName = document.createElement('div');
                newThumbnailName.className = 'thumbnail-name';
                newThumbnailName.innerHTML = products[i].name;
            
                let newThumbnailPrice = document.createElement('div');
                newThumbnailPrice.className = 'thumbnail-price';
                newThumbnailPrice.innerHTML = products[i].price + ' €';

                newThumbnail.appendChild(newThumbnailName);
                newThumbnail.appendChild(newThumbnailPrice);

                newThumbnail.style.background = 'url('+products[i].imgurl+') no-repeat center';

                newThumbnail.setAttribute('data-id', products[i].id);

                thumbnailcontainerObj.appendChild(newThumbnail);
            }
        }
    }

    xhr.send();
}
/*
document.addEventListener('click', function(event) {
    if(event.target.matches('.thumbnail')) {
        let id = event.target.getAttribute('data-id');
        showProductDetails(id);
    }
    else if(event.target.matches('.btn'))
})

function purchase() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/order');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            if(res.error)
        }
    }
}
*/

loadProducts();








import {cart} from '../data/cart.js';

import {products} from '../data/products.js';

cartSummaryHtml = ''

cart.forEach((cartItem) => {
    const productId = cartItem.productId

    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product
        }

       
    })

    console.log(matchingProduct)
    console.log("im here")

})
console.log('jbdjvfvröl')

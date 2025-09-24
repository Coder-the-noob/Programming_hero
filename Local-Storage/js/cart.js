const addToCart = () => {
    const productE1 = document.getElementById('productName');
    const productName = productE1.value;
    const quantityE1 = document.getElementById('quantity');
    const productQuantity = quantityE1.value;   
    // console.log('product add', productName, productQuantity);

    displayProduct(productName, productQuantity);
    addProductToCart(productName, productQuantity);

    productE1.value = '';
    quantityE1.value = '';
}

const getCart = () => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }


    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart();
    if(cart[product]){
        cart[product] = parseInt(cart[product]) + parseInt(quantity);
    }

    else{
        cart[product] = parseInt(quantity);
    }
    cart[product] = quantity;
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart);
    console.log(cart);
    displayProduct(product, quantity);
}

const displayProduct = (product , quantity) => {

    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    const ul = document.getElementById('products-container');
    ul.appendChild(li);

}

const displayStoredCart = () => {
    const cart = getCart();
    for(const product in cart){
        const quantity = cart[product];
        displayProduct(product, quantity);
        
    }
}
displayStoredCart();
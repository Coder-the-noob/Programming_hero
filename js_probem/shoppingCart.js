const products =[ 
    
    {name: 'Shampoo', price: 350, quantity: 2 },
    {name: 'Soap', price:70 , quantity: 3 },
    {name: 'Toothpaste', price: 110 , quantity: 1},
    {name: 'Body Wash', price:  200, quantity: 2},
    {name: 'Face Wash', price: 145 , quantity: 3 }
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        total += product.price * product.quantity;
    }
    return total;
}

const total = cartTotal(products);
console.log("Total cart value: ", total);
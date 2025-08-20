function calculateTotalPrice(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 800;
    const shoePrice = 1600;

    const total = (shirtQuantity * shirtPrice) + (pantQuantity * pantPrice) + (shoeQuantity * shoePrice);
    
    return total;
}

const clothingCost = calculateTotalPrice(2, 4, 1);
console.log("Total clothing cost:", clothingCost);
function calculateDiscount() {
    let purchaseAmount = parseFloat(document.getElementById("amountBox").value);
    let discount;
    if (purchaseAmount >= 1500) {
        discount = purchaseAmount * 0.15;
    }
    else if (purchaseAmount >= 1000) {
        discount = purchaseAmount * 0.10;
    }
    else if (purchaseAmount >= 500) {
        discount = purchaseAmount * 0.05;
    }
    else {
        discount = 0;
    }
    document.getElementById("discountBox").value = discount;
   let finalAmount = purchaseAmount - discount;
   document.getElementById("finalPriceBox").value = finalAmount; 
}
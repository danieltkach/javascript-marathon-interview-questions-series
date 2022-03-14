const applyDiscount = (percentage) => (amountSpent) => amountSpent - (percentage * amountSpent / 100);

const discount50 = applyDiscount(50);
const discount10 = applyDiscount(10);

let price = 38000;
console.log('price: $', price);

let finalPrice = discount50(price);
console.log('50% off ->', finalPrice);

finalPrice = discount10(price);
console.log('10% off ->', finalPrice);